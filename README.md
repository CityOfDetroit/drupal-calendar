# drupal-calendar
Full calendar view for events using drupal as backend.

## Getting Started

This project was created using:
    [FullCalendar](https://fullcalendar.io/) for calendar rendering.
    [Parcel](https://parceljs.org/) as a web application bundler.

## Setup Local Environment.

1. Download the repo.
    ```
    $ git clone git@github.com:CityOfDetroit/drupal-calendar.git
    ```
2. Install node dependencies.

    ```
    $ npm install
    ```

3. Run local instance.
    ```
    $ parcel index.html
    ```
## Create Build

1. Delete `dist` folder.

2. Run build process.
    ```
    $ parcel build index.html --public-url '.' --no-cache
    ```

3. Move new `dist` content to `dev`, `stage` or `prod` evironment.

## Resources

* SLACK - #webteam
* GitHub - https://github.com/CityOfDetroit/drupal-calendar