import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  item: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginBottom: '10@s',
    padding: '15@s',
    borderRadius: '12@s',
    elevation: '1@s',
    shadowColor: '#000',
    shadowOffset: { width: '0@s', height: '2@s'},
    shadowOpacity: '0.1@s',
    shadowRadius: '2@s',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  status: {
    width: '8@s',
    height: '20@s',
    backgroundColor: '#55BCF6',
    opacity: '0.6@s',
    borderRadius: '5@s',
    marginRight: '10@s',
  },
  itemText: {
    maxWidth: '90%',
    color: '#000',
    fontSize: '12@s',  
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left'
  },
  deadline: {
    paddingTop: '5@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deadlineText: {
    color: '#b8b8b8',
    fontSize: '10@s',
    fontWeight: 'bold',
    marginLeft: '3@s',
  },
  calendarIcon: {
    color: '#b8b8b8',
    fontSize: '10@s',
    fontWeight: 'bold',
  },
  type: {
    paddingBottom: '5@s',
  },
  typeText: {
    color: '#495057',
    fontSize: '10@s',
    fontWeight: 'bold',
  }
});

export default styles;