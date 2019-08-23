import datetime
import re
from typing import Iterator, Sequence

from improv_guide_web_scrapers.model.event import Event
from bs4 import BeautifulSoup, Tag
import pprint

def parse_fa_datetime(date_string, time_string):
    start_time = datetime.datetime(2019, 8, 30, 19, 30)
    end_time = datetime.datetime(2019, 8, 30, 20, 30)

    return start_time, end_time


def free_association_scraper(page_html:str)->Iterator[Event]:
    assert page_html, f"No data to scrape, got {pprint.pformat(input())}"
    soup = BeautifulSoup(page_html)

    show_divs:Sequence[Tag] = soup.findAll("div", {"class": "summary-item-record-type-event"})
    for div in show_divs:
        image:Tag = div.find("img", {"class":"summary-thumbnail-image loaded"})
        title:Tag = div.find("a", {"class":"summary-title-link"})
        date:str = div.find("time").text
        times:str = div.find("span", {"class":"event-time-24hr"})

        start_hours, start_minutes, end_hours, end_minutes = re.search("([0-9]{2}):([0-9]{2}) - ()")

        dt: datetime.stptime(date, "%b %d, %Y ")
        blurb:Tag = div.find("div", {"class":"summary-excerpt"})


        e = Event(
            name="".join(title.contents),
            image_url=image.src
        )

        yield e