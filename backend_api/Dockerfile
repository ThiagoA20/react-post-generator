FROM python:3.8

WORKDIR /backend

COPY requeriments.txt .

RUN pip install -r requeriments.txt

COPY . .

CMD python server.py