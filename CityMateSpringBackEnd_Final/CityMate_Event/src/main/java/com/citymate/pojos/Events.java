package com.citymate.pojos;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "events")
public class Events  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "event_name" , length = 30)
	private String eventName;
	@Column(name = "event_date")
	private LocalDate eventDate;
	@Column(name = "last_date")
	private LocalDate lastDateToRegister;
	@Column(length = 100 )
	private String location;
	@Column(columnDefinition = "TIME" )
	private LocalTime timing;
	private double amount;
	private String description;
	
	@OneToMany(mappedBy = "event" , cascade = CascadeType.ALL , orphanRemoval = true )
	@JsonIgnore
	@JsonIgnoreProperties("event")
	private List<User> userDetails = new ArrayList<>();

	public Events() {
		System.out.println("in events constructor");
	}

	public Events(int id ,String eventName, LocalDate eventDate, LocalDate lastDateToRegister, String location,
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

	public List<User> getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(List<User> userDetails) {
		this.userDetails = userDetails;
	}
	
	
	

	@Override
	public String toString() {
		return "Events [id=" + id + ", eventName=" + eventName + ", eventDate=" + eventDate + ", lastDateToRegister="
				+ lastDateToRegister + ", location=" + location + ", timing=" + timing + ", amount=" + amount
				+ ", description=" + description + ", userDetails=" + userDetails + "]";
	}

	//add Helper methods
	public User addUser(User u) {
		userDetails.add(u);   // establishing link between parent --> child and child --> parent
		u.setEvent(this);
		return u;
	}
	
	public void deleteUser(User u) {
		userDetails.remove(u);  // de-link between parent --> child and child --> parent
		u.setEvent(null);
	}
	
	
	
	
	
	
	
}
