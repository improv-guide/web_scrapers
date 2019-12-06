import datetime
from dataclasses import dataclass


@dataclass
class Event:
    name: str
    image_url: str
    start_time: datetime.datetime
    end_time: datetime.datetime
    blurb: str
    url: str
    venue: str
