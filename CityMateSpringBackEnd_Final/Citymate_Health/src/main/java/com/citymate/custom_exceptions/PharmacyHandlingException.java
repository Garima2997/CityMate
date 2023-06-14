package com.citymate.custom_exceptions;

@SuppressWarnings("serial")
public class PharmacyHandlingException extends RuntimeException {
public PharmacyHandlingException(String mesg) {
	super(mesg);
}
}
