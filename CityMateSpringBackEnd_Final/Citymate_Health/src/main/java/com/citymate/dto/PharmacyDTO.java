package com.citymate.dto;

import java.time.LocalTime;

public class PharmacyDTO {
	private Integer id;
	private String name;
	private String address;
	private String phoneNum;
	private int pincode;
    private LocalTime openingTime;
    private LocalTime closingTime;
    
    public PharmacyDTO() {
		super();
	}

	public PharmacyDTO(Integer id, String name, String address, String phoneNum, int pincode, LocalTime openingTime,
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
		return "PharmacyDTO [id=" + id + ", name=" + name + ", address=" + address + ", phoneNum=" + phoneNum
				+ ", pincode=" + pincode + ", openingTime=" + openingTime + ", closingTime=" + closingTime + "]";
	}
    
	
}
