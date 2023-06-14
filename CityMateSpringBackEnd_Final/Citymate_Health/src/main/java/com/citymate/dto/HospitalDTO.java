package com.citymate.dto;

import java.time.LocalTime;

public class HospitalDTO {
	private Integer id;
	private String name;
	private String address;
	private String phoneNum;
	private boolean covidCenter;
	private String category;
    private LocalTime opdTimeStart;
    private LocalTime opdTimeEnd;
    private String imgPath;
    private String description;
    
	public HospitalDTO() {
		super();
	}

	public HospitalDTO(Integer id, String name, String address, String phoneNum, boolean covidCenter, String category,
			LocalTime opdTimeStart, LocalTime opdTimeEnd, String imgPath, String description) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phoneNum = phoneNum;
		this.covidCenter = covidCenter;
		this.category = category;
		this.opdTimeStart = opdTimeStart;
		this.opdTimeEnd = opdTimeEnd;
		this.imgPath = imgPath;
		this.description = description;
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

	public boolean isCovidCenter() {
		return covidCenter;
	}

	public void setCovidCenter(boolean covidCenter) {
		this.covidCenter = covidCenter;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public LocalTime getOpdTimeStart() {
		return opdTimeStart;
	}

	public void setOpdTimeStart(LocalTime opdTimeStart) {
		this.opdTimeStart = opdTimeStart;
	}

	public LocalTime getOpdTimeEnd() {
		return opdTimeEnd;
	}

	public void setOpdTimeEnd(LocalTime opdTimeEnd) {
		this.opdTimeEnd = opdTimeEnd;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "HospitalDTO [id=" + id + ", name=" + name + ", address=" + address + ", phoneNum=" + phoneNum
				+ ", covidCenter=" + covidCenter + ", category=" + category + ", opdTimeStart=" + opdTimeStart
				+ ", opdTimeEnd=" + opdTimeEnd + ", imgPath=" + imgPath + ", description=" + description + "]";
	}
	

}