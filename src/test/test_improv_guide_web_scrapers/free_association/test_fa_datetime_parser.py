from datetime import datetime

from improv_guide_web_scrapers.scrapers.free_association import parse_fa_datetime


def test_foo_0():
    pass


def test_parse_fa_datetime0():
    time_string = "19:30 – 20:30"
    date_string = "Aug 30, 2019"
    start_time, end_time = parse_fa_datetime(
        date_string=date_string, time_string=time_string
    )
    expected_start_time = datetime(2019, 8, 30, 19, 30)
    expected_end_time = datetime(2019, 8, 30, 20, 30)

    assert expected_end_time == end_time
    assert expected_start_time == start_time


def test_parse_fa_datetime1():
    time_string = "19:31 – 21:32"
    date_string = "Sep 30, 2019"
    start_time, end_time = parse_fa_datetime(
        date_string=date_string, time_string=time_string
    )
    expected_start_time = datetime(2019, 9, 30, 19, 31)
    expected_end_time = datetime(2019, 9, 30, 21, 32)

    assert expected_start_time == start_time
    assert expected_end_time == end_time
