package com.citymate.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class EventDTO {
	
	private Integer id;
	private String eventName;
	private LocalDate eventDate;
	private LocalDate lastDateToRegister;
	private String location;
	private LocalTime timing;
	private double amount;
	private String description;
	
	
	public EventDTO(int id , String eventName, LocalDate eventDate, LocalDate lastDateToRegister, String location,
			LocalTime timing, double amount, String description) {
		super();
		this.id = id;
		this.eventName = eventName;
		this.eventDate = eventDate;
		this.lastDateToRegister = lastDateToRegister;
		this.location = location;
		this.timing = timing;
		this.amount = amount;
		this.description = description;
	}


	public EventDTO() {
		// TODO Auto-generated constructor stub
	}

	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getEventName() {
		return eventName;
	}


	public void setEventName(String eventName) {
		this.eventName = eventName;
	}


	public LocalDate getEventDate() {
		return eventDate;
	}


	public void setEventDate(LocalDate eventDate) {
		this.eventDate = eventDate;
	}


	public LocalDate getLastDateToRegister() {
		return lastDateToRegister;
	}


	public void setLastDateToRegister(LocalDate lastDateToRegister) {
		this.lastDateToRegister = lastDateToRegister;
	}


	public String getLocation() {
		return location;
	}


	public void setLocation(String location) {
		this.location = location;
	}


	public LocalTime getTiming() {
		return timing;
	}


	public void setTiming(LocalTime timing) {
		this.timing = timing;
	}


	public double getAmount() {
		return amount;
	}


	public void setAmount(double amount) {
		this.amount = amount;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}
	
	


	@Override
	public String toString() {
		return "EventDTO [eventName=" + eventName + ", eventDate=" + eventDate + ", lastDateToRegister="
				+ lastDateToRegister + ", location=" + location + ", timing=" + timing + ", amount=" + amount
				+ ", description=" + description + "]";
	}
	
	
	
}
