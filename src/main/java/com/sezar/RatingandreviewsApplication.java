package com.sezar;

//@SpringBootApplication
//public class RatingandreviewsApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(RatingandreviewsApplication.class, args);
//	}
//}
//




//package com.sezar;


		import org.springframework.boot.SpringApplication;
		import org.springframework.boot.autoconfigure.SpringBootApplication;
		import org.springframework.boot.builder.SpringApplicationBuilder;
		import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class RatingandreviewsApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(RatingandreviewsApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(RatingandreviewsApplication.class);
	}
}




