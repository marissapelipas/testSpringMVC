package pel.samples.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import pel.samples.app.model.User;


@Controller
@RequestMapping(value = "/OldStyleRest")
public class SampleOldStyleRestController {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());		
	
    @RequestMapping(value="/submitUserForm", method=RequestMethod.POST)
    public @ResponseBody User submitUserForm(@RequestBody User user) {
    	
    	logger.debug("Old Style RestFul POST request: " + user);
    	
        return user;
    }

    
    @RequestMapping(value="/sampleUser", method = RequestMethod.GET)
    public @ResponseBody User submitUserForm() {
    	User user = new User("jack88", "jack black", 33);
    	logger.debug("Old Style RestFul GET request: " + user);
    	
        return user;
    }    
}
