package com.citymate.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CurrentHotSpot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long placeId;
	private String placeName;
	private String address;
	private String timings;
	private String days;
	private String description;
	private String contactDetails;
	private String entryFee;
	public CurrentHotSpot() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public CurrentHotSpot(String placeName, String address, String timings, String days, String description,
			String contactDetails, String entryFee) {
		super();
		this.placeName = placeName;
		this.address = address;
		this.timings = timings;
		this.days = days;
		this.description = description;
		this.contactDetails = contactDetails;
		this.entryFee = entryFee;
	}
	
	public long getPlaceId() {
		return placeId;
	}
	public void setPlaceId(long id) {
		this.placeId = id;
	}
	public String getPlaceName() {
		return placeName;
	}
	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTimings() {
		return timings;
	}
	public void setTimings(String timings) {
		this.timings = timings;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getContactDetails() {
		return contactDetails;
	}
	public void setContactDetails(String contactDetails) {
		this.contactDetails = contactDetails;
	}
	public String getentryFee() {
		return entryFee;
	}
	public void setentryFee(String entryFee) {
		this.entryFee = entryFee;
	}
	@Override
	public String toString() {
		return "CurrentHotSpot [placeName=" + placeName + ", address=" + address + ", timings=" + timings
				+ ", days=" + days + ", description=" + description + ", contactDetails=" + contactDetails
				+ ", entryFee=\" + entryFee + \"]";
	}
	

}
