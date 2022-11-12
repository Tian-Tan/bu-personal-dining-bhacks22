import requests, datetime

# BU has three dining halls
dining_halls=['marciano', 'warren', 'west']
# gets the current date
date = str(datetime.datetime.now())[0: 10]

# fetches the menu for today for each of the dining halls and save them to the corresponding text files
for hall in dining_halls:
    data = requests.get(f'https://www.bu.edu/dining/api/locations/{hall}/menu/{date}/').text
    print(f'https://www.bu.edu/dining/api/locations/{hall}/menu/{date}/')
    f = open(f"{hall}-menu-on-{date}.txt", "w")
    f.write(data)
    f.close()