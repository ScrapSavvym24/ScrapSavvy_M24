package com.scrap.dto;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Response {
	public static ResponseEntity<?> success(Object data, String msg) {
		Map<String, Object> map = new HashMap<>();
		map.put("status", "success");
		map.put("message", msg);
		map.put("data", data);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> error(Object err, String msg) {
		Map<String, Object> map = new HashMap<>();
		map.put("status", "error");
		map.put("message", msg);
		map.put("error", err);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> status(HttpStatus status) {
		return ResponseEntity.status(status).build();
	}
}
