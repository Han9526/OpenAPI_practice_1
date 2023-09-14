import requests
from bs4 import BeautifulSoup

# 웹 페이지에 get 요청
response = requests.get("https://lostark.game.onstove.com/News/Event/Now")


# 응답
html = response.text
# html로 해석
soup = BeautifulSoup(html,'html.parser')



