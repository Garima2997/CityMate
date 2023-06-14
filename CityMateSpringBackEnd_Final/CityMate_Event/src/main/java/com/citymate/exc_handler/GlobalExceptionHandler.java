package com.citymate.exc_handler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.citymate.custom_exceptions.EventHandlingException;
import com.citymate.custom_exceptions.UserHandlingException;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
	
	@ExceptionHandler(EventHandlingException.class)
	public ResponseEntity<?> handleEventHandlingException(EventHandlingException e){
		
		Map<String, Object> body = new HashMap<>();
		body.put("timestamp" , LocalDateTime.now());
		body.put("error_message" , e.getMessage());
		
		
		return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(UserHandlingException.class)
	public ResponseEntity<?> handleUserHandlingException(UserHandlingException u){
		
		Map<String, Object> body = new HashMap<>();
		body.put("timestamp" , LocalDateTime.now());
		body.put("error_message" , u.getMessage());
		
		
		return new ResponseEntity<>(body, HttpStatus.NOT_FOUND);
	}
	
	
}
