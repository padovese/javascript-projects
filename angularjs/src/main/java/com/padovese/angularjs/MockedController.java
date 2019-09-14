package com.padovese.angularjs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MockedController {

	@GetMapping("/mock")
	public MockCities cities() {
		MockCities mockCities = new MockCities();
		mockCities.setCountry("Brazil");
		mockCities.setName("Sao Paulo");
		
		return mockCities;
	}
}
