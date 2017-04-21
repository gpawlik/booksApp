import { StyleSheet } from 'react-native';

import colors from 'config/colors';

const timelineItem = {
  width: 45,
  height: 80,
  borderWidth: 3,
  traceWidth: 3
};

const timelineLine = {
  width: timelineItem.traceWidth,
  backgroundColor: '#dedede',
  position: 'absolute',
  left: timelineItem.width / 2 - timelineItem.traceWidth / 2
};

export default StyleSheet.create({
  item: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    alignItems: 'flex-end'
  },
  dateDayMonth: {
    fontSize: 10,
    color: '#ccc'
  },
  dateYear: {
    fontSize: 10,
    color: '#ccc'
  },
  pictureBox: {
    width: timelineItem.width,
    height: timelineItem.height,
    marginLeft: 10,
    marginRight: 10
  },
  picture: {
    backgroundColor: '#eee',
    width: timelineItem.width,
    height: timelineItem.width,
    borderRadius: timelineItem.width / 2,
    borderWidth: timelineItem.borderWidth,
    borderColor: colors.primaryDark,
    position: 'absolute',
    top: timelineItem.height / 2 - timelineItem.width / 2,
    left: 0
  },
  timeline: {
    ...timelineLine,
    height: timelineItem.height,
    top: 0
  },
  timelineFirst: {
    ...timelineLine,
    height: timelineItem.height / 2,
    top: timelineItem.height / 2
  },
  timelineLast: {
    ...timelineLine,
    height: timelineItem.height / 2,
    top: 0
  }
});
