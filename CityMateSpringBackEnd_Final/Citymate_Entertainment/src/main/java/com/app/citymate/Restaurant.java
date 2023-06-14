package com.app.citymate;

import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "restaurant")
public class Restaurant extends BaseEntity{

	private String name;
	private String address;
	private String imgPath;
	
	@Column(name = "phone_no")
	private String phoneNum;
	

	@Column(name="opening_time",columnDefinition = "TIME")
	private LocalTime openingTime;
	
	@Column(name="closing_time",columnDefinition = "TIME")
	private LocalTime closingTime;
	
	public Restaurant() {
		// TODO Auto-generated constructor stub
	}

	public Restaurant(String name, String address, String imgPath, String phoneNum, LocalTime openingTime,
			LocalTime closingTime) {
		super();
		this.name = name;
		this.address = address;
		this.imgPath = imgPath;
		this.phoneNum = phoneNum;
		this.openingTime = openingTime;
		this.closingTime = closingTime;
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

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
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
		return "Restaurant [name=" + name + ", address=" + address + ", imgPath=" + imgPath + ", phoneNum=" + phoneNum
				+ ", openingTime=" + openingTime + ", closingTime=" + closingTime + "]";
	}

	
	
	
	
	
	
	
}
