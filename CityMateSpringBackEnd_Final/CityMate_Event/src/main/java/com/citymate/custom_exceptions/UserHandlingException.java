package com.citymate.custom_exceptions;

@SuppressWarnings("serial")
public class UserHandlingException extends RuntimeException{

	public UserHandlingException(String message) {
		super(message);
	}
}
