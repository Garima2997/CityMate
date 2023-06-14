package com.citymate.custom_exceptions;

@SuppressWarnings("serial")
public class EventHandlingException extends RuntimeException{

	public EventHandlingException(String message) {
		super(message);
	}
}
