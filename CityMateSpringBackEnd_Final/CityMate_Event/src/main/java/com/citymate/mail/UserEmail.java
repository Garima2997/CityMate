package com.citymate.mail;

import org.springframework.stereotype.Component;

@Component
public class UserEmail {

	private String emailAddress;
	
	private String emailMessage;

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getEmailMessage() {
		return emailMessage;
	}

	public void setEmailMessage(String emailMessage) {
		this.emailMessage = emailMessage;
	}

	@Override
	public String toString() {
		return "UserEmail [emailAddress=" + emailAddress + ", emailMessage=" + emailMessage + "]";
	}
	
	
	
	
}
