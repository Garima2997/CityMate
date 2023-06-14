package com.citymate.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HistoricalPlaces {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long hPlaceId;
	private String hPlaceName;
	private String hAddress;
	private String hTimings;
	private String hDays;
	private String hDescription;
	private String hContactDetails;
	private String hentryFee;
	public HistoricalPlaces() {
		super();
		// TODO Auto-generate	d constructor stub
	}
	public HistoricalPlaces(String hPlaceName, String hAddress, String hTimings, String hDays, String hDescription,
			String hContactDetails, String hentryFee) {
		super();
		this.hPlaceName = hPlaceName;
		this.hAddress = hAddress;
		this.hTimings = hTimings;
		this.hDays = hDays;
		this.hDescription = hDescription;
		this.hContactDetails = hContactDetails;
		this.hentryFee = hentryFee;
	}
	public long gethPlaceId() {
		return hPlaceId;
	}
	public void sethPlaceId(long hPlaceId) {
		this.hPlaceId = hPlaceId;
	}
	public String gethPlaceName() {
		return hPlaceName;
	}
	public void sethPlaceName(String hPlaceName) {
		this.hPlaceName = hPlaceName;
	}
	public String gethAddress() {
		return hAddress;
	}
	public void sethAddress(String hAddress) {
		this.hAddress = hAddress;
	}
	public String gethTimings() {
		return hTimings;
	}
	public void sethTimings(String hTimings) {
		this.hTimings = hTimings;
	}
	public String gethDays() {
		return hDays;
	}
	public void sethDays(String hDays) {
		this.hDays = hDays;
	}
	public String gethDescription() {
		return hDescription;
	}
	public void sethDescription(String hDescription) {
		this.hDescription = hDescription;
	}
	public String gethContactDetails() {
		return hContactDetails;
	}
	public void sethContactDetails(String hContactDetails) {
		this.hContactDetails = hContactDetails;
	}
	public String gethentryFee() {
		return hentryFee;
	}
	public void sethentryFee(String hentryFee) {
		this.hentryFee = hentryFee;
	}
	@Override
	public String toString() {
		return "HistoricalPlaces [hPlaceName=" + hPlaceName + ", hAddress=" + hAddress + ", hTimings="
				+ hTimings + ", hDays=" + hDays + ", hDescription=" + hDescription + ", hContactDetails=" + hContactDetails
				+ ", hentryFee=\" + hentryFee + \"]";
	}
}
