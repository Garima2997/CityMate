package com.citymate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citymate.custom_exceptions.EventHandlingException;
import com.citymate.dao.EventRepository;
import com.citymate.dto.EventDTO;
import com.citymate.pojos.Events;

@Service
@Transactional
public class EventServiceImpl implements IEventService {
		
	@Autowired
	EventRepository eventRepo;

	@Override
	public List<EventDTO> fetchAllEvents() {
		List<EventDTO> eventList = new ArrayList<>();
		eventRepo.findAll().forEach(e -> {
		EventDTO dto = new EventDTO();	
		BeanUtils.copyProperties(e, dto);
		
		eventList.add(dto);
		});
		return eventList;
	}

	@Override
	public EventDTO addNewEvent(Events e) {
		
		Events persistentEvent = eventRepo.save(e);
		EventDTO dto = new EventDTO();
		BeanUtils.copyProperties(persistentEvent, dto);
		return dto;
	}

	@Override
	public String deleteEvent(int eventId) {
		
		Events e = eventRepo.findById(eventId).orElseThrow(() -> new EventHandlingException("Invalid Event Id"));
		eventRepo.deleteById(eventId);
		return "Event Deleted Successfully!!";
	}

	@Override
	public EventDTO updateEvent(int eventId, EventDTO eventDTO) {
		
		Events eventDetails = eventRepo.findById(eventId).get();
		BeanUtils.copyProperties(eventDTO, eventDetails, "eventName" , "eventDate" );
		return eventDTO;
	}

	@Override
	public EventDTO getEventDetails(int eventId) {
		
		Events eventDetail = eventRepo.findById(eventId).orElseThrow(() -> new EventHandlingException("Invalid Event Id"));
		EventDTO dto = new EventDTO();
		BeanUtils.copyProperties(eventDetail, dto);
		System.out.println("dto " + dto);
		return dto;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
