package pel.samples.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import pel.samples.app.model.User;

@Controller
public class SampleFormController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());	
	
	@RequestMapping(value = "/UserForm", method = RequestMethod.GET)
	public ModelAndView viewUserForm() {
		return new ModelAndView("UserForm", "command", new User());
	}

	@RequestMapping(value = "/submitUserForm", method = RequestMethod.POST)
	public String submitUserForm(@ModelAttribute("user") User user,
			BindingResult result, ModelMap model) {

		model.addAttribute("userName", user.getUsername());
		model.addAttribute("fullName", user.getFullname());
		model.addAttribute("age", user.getAge());
		
		logger.debug("Submitted UserForm: " + user.toString());
		
		return "afterFormSubmit";
	}

}
