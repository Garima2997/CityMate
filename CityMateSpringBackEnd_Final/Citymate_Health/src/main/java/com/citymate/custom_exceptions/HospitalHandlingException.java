package com.citymate.custom_exceptions;

@SuppressWarnings("serial")
public class HospitalHandlingException extends RuntimeException {
public HospitalHandlingException(String mesg) {
	super(mesg);
}
}
