package skeleton;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ABC {
	WebDriver driver;
	@Given("^The URL of Git hub$")
	public void the_URL_of_Git_hub() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\chromedriver_win32\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("https://github.com/login");
	driver.manage().window().maximize();
		}
	@When("^user enters (.*) as username$")
	public void user_enters_ShilpaKumareshan_as_username(String username) throws Throwable {
		driver.findElement(By.id("login_field")).sendKeys(username);
	}
	@When("^user enters (.*) as password$")
	public void user_enters_Testing123_as_password(String password) throws Throwable {
		driver.findElement(By.id("password")).sendKeys(password);
	}
	@Given("^user clicks on SignIn$")
	public void user_click_on_SignIn() throws Throwable {
	driver.findElement(By.name("commit")).click();	
	 }
	@Then("^user navigates to (.*)$")
	public void user_navigates_to_GitHub(String result) throws Throwable {
		if(result.startsWith("Sign"))
		{
			Assert.assertTrue(driver.getTitle().startsWith("Sign"));
		}
			else
				Assert.assertTrue(driver.getTitle().startsWith("Git"));	
		}		 
	@Then("^User clicks on Submit for (Git hub page|Sign in for Git Hub Page)$")
	public void user_clicks_on_Submit_for_Git_hub_page(String message) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
}
}
