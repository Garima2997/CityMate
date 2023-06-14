package com.citymate.service;

import java.util.List;

import com.citymate.dto.EventDTO;
import com.citymate.pojos.Events;

public interface IEventService {
	
	public List<EventDTO> fetchAllEvents();
	
	public EventDTO addNewEvent(Events e);
	
	public String deleteEvent(int eventId);
	
	public EventDTO updateEvent(int eventId , EventDTO eventDTO);
	
	public EventDTO getEventDetails(int eventId);
	
}
