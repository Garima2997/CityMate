package com.citymate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
	
import com.citymate.dto.EventDTO;
import com.citymate.dto.ResponseDTO;
import com.citymate.pojos.Events;
import com.citymate.service.IEventService;

@RestController
@RequestMapping("/event")
@CrossOrigin
public class EventController {

	@Autowired
	IEventService eventService;

	@GetMapping
	public ResponseEntity<?> eventList() {

		System.out.println("in eventList " + getClass().getName());		
		return ResponseEntity.ok(new ResponseDTO<>(eventService.fetchAllEvents()));
	}
	
	@GetMapping("/{eventId}")
	public ResponseEntity<?> getEventDetails(@PathVariable int eventId) {
		System.out.println("in get event dtls " + eventId);
		return ResponseEntity.ok(new ResponseDTO<>(eventService.getEventDetails(eventId)));
	}

	@PostMapping
	public ResponseEntity<?> addNewEvent(@RequestBody Events e) {
		System.out.println("in add new event " + e);
		return ResponseEntity.ok(new ResponseDTO<>(eventService.addNewEvent(e)));

	}

	@PutMapping("/{eventId}")
	public ResponseEntity<?> updateEvent(@PathVariable int eventId , @RequestBody EventDTO eventDTO){
		
		System.out.println("in update event " + eventId + "  " + eventDTO);
		return ResponseEntity.ok(eventService.updateEvent(eventId, eventDTO));
		
	}

	@DeleteMapping("/{eventId}")
	public ResponseEntity<?> deleteEvent(@PathVariable int eventId) {
		try {
		return ResponseEntity.ok(eventService.deleteEvent(eventId));
		}catch(RuntimeException e) {
			return new ResponseEntity<>(new ResponseDTO<>("Event details deletion failed"),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
