import datetime
import re
import string
from typing import Iterator, Sequence
import dateparser

from improv_guide_web_scrapers.model.event import Event
from bs4 import BeautifulSoup, Tag
import pprint

def parse_fa_datetime(date_string, time_string):
    show_date = dateparser.parse(date_string)
    start_hours, start_minutes, end_hours, end_minutes = [int(a) for a in re.search("(\d{2}):(\d{2})\s.\s(\d{2}):(\d{2})", time_string).groups()]

    start_time = datetime.time(start_hours, start_minutes)
    end_time = datetime.time(end_hours, end_minutes)

    start_datetime = datetime.datetime.combine( show_date, start_time)
    end_datetime = datetime.datetime.combine( show_date, end_time)

    return start_datetime, end_datetime


def free_association_scraper(page_html: str) -> Iterator[Event]:
    assert page_html, f"No data to scrape, got {pprint.pformat(input())}"
    soup = BeautifulSoup(page_html)

    show_divs:Sequence[Tag] = soup.findAll("div", {"class": "summary-item-record-type-event"})
    for div in show_divs:
        image:Tag = div.find("img", {"class":"summary-thumbnail-image loaded"})
        title_tag:Tag = div.find("a", {"class":"summary-title-link"})

        event_name:str = string.capwords(title_tag.text)
        event_url:str = title_tag["href"]

        date:str = div.find("time").text
        times:str = div.find("time", {"class":"event-time-24hr"})


        start_time, end_time = parse_fa_datetime(date, times)

        dt: datetime.stptime(date, "%b %d, %Y ")
        blurb:Tag = div.find("div", {"class":"summary-excerpt"})


        e = Event(
            name="".join(title.contents),
            image_url=image.src
        )

        yield e