package com.citymate.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class College {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String collegeName;
	private String principalName;
	private String collegeCategory;
	private String courses;
	private String location;
	private String telephoneNo;
	@Column(name="img_path")
	private String imgPath;
	@Column(name="college_website")
	private String collegeWebsite;
	public College() {
		super();
		// TODO Auto-generate	d constructor stub
	}
	public College(String imgPath,String collegeName, String principalName, String collegeCategory, String courses, String location,
			String telephoneNo,String collegeWebsite) {
		super();
		this.imgPath=imgPath;
		this.collegeName = collegeName;
		this.principalName = principalName;
		this.collegeCategory = collegeCategory;
		this.courses = courses;
		this.location = location;
		this.telephoneNo = telephoneNo;
		this.collegeWebsite=collegeWebsite;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public String getCollegeWebsite() {
		return collegeWebsite;
	}
	public void setCollegeWebsite(String collegeWebsite) {
		this.collegeWebsite = collegeWebsite;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getPrincipalName() {
		return principalName;
	}
	public void setPrincipalName(String principalName) {
		this.principalName = principalName;
	}
	public String getCollegeCategory() {
		return collegeCategory;
	}
	public void setCollegeCategory(String collegeCategory) {
		this.collegeCategory = collegeCategory;
	}
	public String getCourses() {
		return courses;
	}
	public void setCourses(String courses) {
		this.courses = courses;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getTelephoneNo() {
		return telephoneNo;
	}
	public void setTelephoneNo(String telephoneNo) {
		this.telephoneNo = telephoneNo;
	}
	@Override
	public String toString() {
		return "College [id=" + id + ", collegeName=" + collegeName + ", principalName=" + principalName
				+ ", collegeCategory=" + collegeCategory + ", courses=" + courses + ", location=" + location
				+ ", telephoneNo=" + telephoneNo + ", imgPath=" + imgPath + ", collegeWebsite=" + collegeWebsite + "]";
	}
	
}
