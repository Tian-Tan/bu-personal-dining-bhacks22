import json

def return_food_list(hall, date, meal):
    ''' returns the list of food available at the dining hall at the date selected in the following format:
        {'meal': {'time_begin':'0900', 'time_end': '1100', 'food': [{food1}, {food2}]}}

        variables:
        hall = ['marciano', 'warren', 'west]
        date is formatted as 'YYYY-MM-DD'
        meal = ['Breakfast', 'Brunch', 'Lunch', 'Dinner']

        The times for the meals are:
        Breakfast: 0900 - 1100
        Lunch: 1100 - 1700
        Dinner: 1700 - 2100
        Special case (Sunday):
        Brunch: 1000 - 1600
        Dinner: 1600 - 2100
    '''
    try:
        f = open(f"data/{hall}-menu-on-{date}.json")
        data = json.load(f)
        meal_times = {'Breakfast': {'time_begin':'0900', 'time_end':'1100'}, 'Lunch': {'time_begin':'1100', 'time_end':'1700'}, 
        'Dinner': {'time_begin':'1700', 'time_end':'2100'}}
        lst = {}

        lst[meal] = {'time_begin':meal_times[meal]['time_begin'], 'time_end':meal_times[meal]['time_end'], 'food':[]}
        stations = data['meal_groups'][meal]['stations']
        for station_id in range(len(stations)):
            menu = stations[station_id]['menu_items']
            for food_id in range(len(menu)):
                lst[meal]['food'].append(menu[food_id])
        f.close()
        return lst

    except:
        print("Error: data does not exist")