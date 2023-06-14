package com.citymate.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.citymate.custom_exceptions.HospitalHandlingException;
import com.citymate.custom_exceptions.PharmacyHandlingException;
import com.citymate.dto.ErrorResponse;

@ControllerAdvice //class level annotation to tell Sc: that whatevr follows wil handle any excp 
//rasied in ANY CONTROLLER/RESt Cont :MANDATORY
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(HospitalHandlingException.class)
	public ResponseEntity<?> handleCustomerHandlingException(HospitalHandlingException e) {
		System.out.println("in cust hand exc "+e);
		return new ResponseEntity<>(new ErrorResponse("Fetching details failed...!!", e.getMessage()), HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(PharmacyHandlingException.class)
	public ResponseEntity<?> handleAccountHandlingException(PharmacyHandlingException e) {
		System.out.println("in acct hand exc "+e);
		return new ResponseEntity<>(new ErrorResponse("Fetching details failed...!!", e.getMessage()), HttpStatus.NOT_FOUND);
	}
}
