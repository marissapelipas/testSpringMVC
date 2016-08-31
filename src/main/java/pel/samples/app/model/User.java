package pel.samples.app.model;

public class User {

	private String username;
	private String fullname;
	private Integer age;

	public User() {
	}

	public User(String username, String fullname, Integer age) {
		super();
		this.username = username;
		this.fullname = fullname;
		this.age = age;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	@Override
	public String toString() {
		return "User [username=" + username + ", fullname=" + fullname
				+ ", age=" + age + "]";
	}

}
