In this project, I built a simple landing page for a risk management company called RSA. I used React and Vite to build the page. I also used Tailwind CSS to style the page. I used Figma to design the page. 

Every section was made a component, using props to pass data to the components.
I have around 10 components in this project; from the Header > Hero > Features > Testimonials > Blog > CTA > Footer.

I made my design in figma then hardcoded the design into the components. The first component was the Button because I planned to use the button in multiple places, so creating a component for it would make it easier to reuse. 

The next component was the Header consisting of a logo, navigation links, and a button, I incorporated a theme toggle and a hamburger menu for mobile view. I also used useState for the theme toggle and the hamburger menu.

I further created the Hero section, this was my first case of using props. I created variables for the h1 text and the p text, then passed them as props to the Hero component. The value we wanted to pass was applied from the app.jsx which houses all our components before shiping to the main.jsx file. This is to make our work pretty neat.

The features section had a child which was the FeatureCard component. I used props style in the hero to pass data to the FeatureCard component, but the data was passed on the Features component itself before being exported to app.jsx

Incase i missed it props in the most basic meaning is like a reusable container that can be used to pass preferred data into a componeng.

The testimonials section had a child which was the TestimonialCard component just like the features section had the FeatureCard component. I used props style in the testimonials component to pass data to the TestimonialCard component.

I used the same process for the Blog section which had the BlogCard component.

The CTA section was a bit different. It had a background image and a button. I used props style in the CTA component to pass data to the CTA heading and paragraph then imported the button we created at the beginning.

The footer component i didn't use props because there was not instance we resued any component, we just had a single footer component. 

React is fun even though I might be late to the party but better late than never, I'm excited to learn more.
I would be using more of this and publishing better projects with this new acquisition.

I'm open to collaborations and contributions, feel free to reach out.

I added a live link to the project below:
https://rsa-react.bolujxlstudio.com/