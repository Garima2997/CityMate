package com.citymate.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "users")
public class User{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column(name = "user_id")
	private Integer userId;
	@Column(length = 30)
	private String name;
	@Column(length = 40)
	private String email;
	@Column(length = 10)
	private String phoneNum;
	@Column(name = "date_of_birth")
	private LocalDate dob;
	@Column(length = 80)
	private String address;
	
	// amount field to be fetched from events
	@ManyToOne /* (fetch = FetchType.LAZY) */  // because i want to fetch event details as well
	@JoinColumn(name="event_id", nullable = false)
//	@JsonIgnoreProperties("userDetails")
//	@JsonIgnore
	private Events event;

	public User() {
		super();
	}

	public User(int id, String name, String email, String phoneNum, LocalDate dob, String address) {
		super();
		this.userId = id;
		this.name = name;
		this.email = email;
		this.phoneNum = phoneNum;
		this.dob = dob;
		this.address = address;
	}
	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
//	@JsonIgnore
	public Events getEvent() {
		return event;
	}
	
//	@JsonProperty
	public void setEvent(Events event) {
		this.event = event;
	}


	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", phoneNum=" + phoneNum + ", dob=" + dob
				+ ", address=" + address + "]";
	}

	
	
	
	
	
	
}
