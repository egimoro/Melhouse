## Melbourne Housing Price Market

A Django and Ajax web CRUD app on the Melbourne housing price market.

# Set up:

The Database Managment System used is Postgresql which can be installed by typing:

        pip install psycopg2

Environment variables:

        $env:secret="Your secret key" or set secret="Your secret key"  or export secret="Your secret key"
        $env:database="Your database" // //
        $env:user="Your user" // //
        $env:pasword="Your password" // //

# Some Key Details
Suburb: Suburb

Address: Address

Rooms: Number of rooms

Price: Price in Australian dollars

Method:
S - property sold;
SP - property sold prior;
PI - property passed in;
PN - sold prior not disclosed
NB - no bid;

Great links used for this project which are highly recommended! One of which isn't related to python but useful for the Jquey and Ajax part.  https://www.pluralsight.com/guides/work-with-ajax-django, https://studygyaan.com/django/how-to-execute-crud-using-django-ajax-and-json, https://www.techiediaries.com/python-django-ajax/, https://www.c-sharpcorner.com/article/crud-operation-in-asp-net-mvc-using-ajax-and-bootstrap/ 
