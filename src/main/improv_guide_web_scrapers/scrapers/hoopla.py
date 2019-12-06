import datetime
from typing import Iterator, Sequence

from bs4 import BeautifulSoup, Tag

from improv_guide_web_scrapers.model.event import Event
import pprint


def extract_start_end_and_venue(details:str):
    yield datetime.datetime.now()
    yield datetime.datetime.now()
    yield "xxx"


def scraper(page_html: str, venue: str) -> Iterator[Event]:
    assert page_html, f"No data to scrape, got {pprint.pformat(input())}"
    soup = BeautifulSoup(page_html)


    event_divs: Sequence[Tag] = soup.findAll(
        "div", {"class": "HooplaListItem-img"}
    )

    for div in event_divs:

        event_name:str = div.find("h3", {"class": "HooplaListItem-title"})
        details:str = div.find("div", {"class": "HooplaListItem-desc"})
        blurb = ""
        # event_url = div.find("a", {"class":"HooplaListItem-src"}).href
        event_url = ""

        start_time, end_time, venue = extract_start_end_and_venue(details)

        e = Event(
            name=event_name,
            image_url="",
            start_time=start_time,
            end_time=end_time,
            blurb=blurb,
            venue=venue,
            url=event_url,
        )

        yield e
        yield e
