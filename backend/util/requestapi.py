import requests

# format the data this way:
# dining_halls=['marciano', 'warren', 'west']
# date = "YYYY-MM-DD"

# gets the current date
#date = str(datetime.datetime.now())[0: 10]

# fetches the menu for the day called for the dining hall called save them to the corresponding text files

def get_data(hall, date):
    ''' creates a json file that stores the menu for the dining hall on the date specified
        dining_halls=['marciano', 'warren', 'west']
        date = "YYYY-MM-DD"
    '''
    data = requests.get(f'https://www.bu.edu/dining/api/locations/{hall}/menu/{date}/').text
    f = open(f"../data/{hall}-menu-on-{date}.json", "w")
    f.write(data)
    f.close()

#for testing purposes gets the data for the following three combinations
get_data('marciano', '2022-11-12')
get_data('warren', '2022-11-12')
get_data('west', '2022-11-12')