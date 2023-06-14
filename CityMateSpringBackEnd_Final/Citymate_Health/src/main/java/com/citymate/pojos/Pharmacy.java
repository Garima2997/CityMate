package com.citymate.pojos;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pharmacy")
public class Pharmacy{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="pharm_id")
	private Integer id;
	@Column(length=100)
	private String name;
	private String address;
	@Column(name="phone_no",length=50)
	private String phoneNum;
	private int pincode;
	@Column(name="opening_time")
    private LocalTime openingTime;
	@Column(name="closing_time")
    private LocalTime closingTime;
	
	public Pharmacy() {
		super();
	}

	public Pharmacy(Integer id, String name, String address, String phoneNum, int pincode, LocalTime openingTime,
			LocalTime closingTime) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phoneNum = phoneNum;
		this.pincode = pincode;
		this.openingTime = openingTime;
		this.closingTime = closingTime;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public LocalTime getOpeningTime() {
		return openingTime;
	}

	public void setOpeningTime(LocalTime openingTime) {
		this.openingTime = openingTime;
	}

	public LocalTime getClosingTime() {
		return closingTime;
	}

	public void setClosingTime(LocalTime closingTime) {
		this.closingTime = closingTime;
	}

	@Override
	public String toString() {
		return "Pharmacy [id=" + id + ", name=" + name + ", address=" + address + ", phoneNum=" + phoneNum
				+ ", pincode=" + pincode + ", openingTime=" + openingTime + ", closingTime=" + closingTime + "]";
	}
	

}