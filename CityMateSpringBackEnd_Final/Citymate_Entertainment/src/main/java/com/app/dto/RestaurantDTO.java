package com.app.dto;

import java.time.LocalTime;

public class RestaurantDTO {

	private Integer id;
	private String name;
	private String imgPath;
	private String address;
	private String phoneNum;
	private LocalTime openingTime;
	private LocalTime closingTime;
	
	public RestaurantDTO() {
		// TODO Auto-generated constructor stub
	}

	public RestaurantDTO(Integer id, String name, String imgPath, String address, String phoneNum,
			LocalTime openingTime, LocalTime closingTime) {
		super();
		this.id = id;
		this.name = name;
		this.imgPath = imgPath;
		this.address = address;
		this.phoneNum = phoneNum;
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

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
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
		return "RestaurantDTO [id=" + id + ", name=" + name + ", imgPath=" + imgPath + ", address=" + address
				+ ", phoneNum=" + phoneNum + ", openingTime=" + openingTime + ", closingTime=" + closingTime + "]";
	}

	
	
	
	
}
