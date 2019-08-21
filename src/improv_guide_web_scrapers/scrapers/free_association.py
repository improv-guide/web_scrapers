from typing import Iterator

from improv_guide_web_scrapers.model.event import Event
from bs4 import BeautifulSoup
import pprint

def free_association_scraper(page_html:str)->Iterator[Event]:
    assert page_html, f"No data to scrape, got {pprint.pformat(input())}"
    soup = BeautifulSoup(page_html)

    show_divs = soup.findAll("div", {"class": "summary-item-record-type-event"})
    for div in show_divs:
        yield None