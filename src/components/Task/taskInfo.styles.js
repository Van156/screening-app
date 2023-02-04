import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    padding: '10@s',
    backgroundColor: '#fff',
    borderRadius: '10@s',
    marginBottom: '10@s',
    elevation: '40@s',
    shadowColor: '#000',
    shadowOffset: { width: '0@s', height: '1@s' },
    shadowOpacity: '0.05@s',
    shadowRadius: '3@s',
  },
  itemText: {
    maxWidth: '90%',
    color: '#000',
    fontSize: '14@s',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  deadline: {
    flexDirection: 'row',
    paddingVertical: '5@s',
  },
  deadlineText: {
    color: '#b8b8b8',
    fontSize: '10@s',
    fontWeight: 'bold',
    marginLeft: '5@s',
    marginBottom: '2@s',
  },
  calendarIcon: {
    color: '#b8b8b8',
    fontSize: '10@s',
    fontWeight: 'bold',
  },
  type: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '5@s',
  },
  typeText: {
    color: '#495057',
    fontSize: '12@s',
    fontWeight: 'bold',
  },
  status: {
    width: '8@s',
    height: '20@s',
    backgroundColor: '#55BCF6',
    opacity: '0.6@s',
    borderRadius: '5@s',
    marginRight: '5@s',
  },
  descriptionText: {
    fontSize: '12@s',
    color: '#000',
    marginVertical: '10@s',
    paddingBottom: '10@s',
  },
});

export default styles;