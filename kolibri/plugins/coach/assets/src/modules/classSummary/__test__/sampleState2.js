export default {
  id: 'class_id',
  name: 'class_name',
  coachMap: {
    coach_id_1: {
      id: 'coach_id_1',
      name: 'Coach Name 1',
      username: 'CoachUsername1',
    },
    coach_id_2: {
      id: 'coach_id_2',
      name: 'Another Coach',
      username: 'AnotherCoach',
    },
  },
  learnerMap: {
    learner_id_1: {
      id: 'learner_id_1',
      name: 'A',
      username: 'A',
    },
    learner_id_2: {
      id: 'learner_id_2',
      name: 'B',
      username: 'B',
    },
    learner_id_3: {
      id: 'learner_id_3',
      name: 'C',
      username: 'C',
    },
    learner_id_4: {
      id: 'learner_id_4',
      name: 'D',
      username: 'D',
    },
    learner_id_5: {
      id: 'learner_id_5',
      name: 'E',
      username: 'E',
    },
    learner_id_6: {
      id: 'learner_id_6',
      name: 'F',
      username: 'F',
    },
    learner_id_7: {
      id: 'learner_id_7',
      name: 'G',
      username: 'G',
    },
    learner_id_8: {
      id: 'learner_id_8',
      name: 'H',
      username: 'H',
    },
    learner_id_9: {
      id: 'learner_id_9',
      name: 'I',
      username: 'I',
    },
    learner_id_10: {
      id: 'learner_id_10',
      name: 'J',
      username: 'J',
    },
    learner_id_11: {
      id: 'learner_id_11',
      name: 'K',
      username: 'K',
    },
  },
  groupMap: {
    group_id_1: {
      id: 'group_id_1',
      name: 'Group 1',
      member_ids: [],
    },
    group_id_2: {
      id: 'group_id_2',
      name: 'Group 1',
      member_ids: ['learner_id_5', 'learner_id_2', 'learner_id_8'],
    },
    group_id_3: {
      id: 'group_id_3',
      name: 'Group 2',
      member_ids: ['learner_id_6', 'learner_id_9', 'learner_id_7', 'learner_id_11', 'learner_id_1'],
    },
    group_id_4: {
      id: 'group_id_4',
      name: 'Group 3',
      member_ids: ['learner_id_4', 'learner_id_10', 'learner_id_3'],
    },
  },
  examMap: {
    exam_id_1: {
      id: 'exam_id_1',
      title: 'exam - B',
      active: true,
      question_sources: [
        { exercise_id: 'node_13', question_id: '1' },
        { exercise_id: 'node_13', question_id: '2' },
        { exercise_id: 'node_13', question_id: '3' },
      ],
      groups: ['group_id_3'],
    },
    exam_id_2: {
      id: 'exam_id_2',
      title: 'exam - A',
      active: true,
      question_sources: [
        { exercise_id: 'node_26', question_id: 'A' },
        { exercise_id: 'node_26', question_id: 'B' },
      ],
      groups: ['group_id_2'],
    },
    exam_id_3: {
      id: 'exam_id_3',
      title: 'exam - C',
      active: true,
      question_sources: [
        { exercise_id: 'node_16', question_id: '10' },
        { exercise_id: 'node_14', question_id: '11' },
        { exercise_id: 'node_15', question_id: '12' },
      ],
      groups: ['group_id_4'],
    },
    exam_id_4: {
      id: 'exam_id_4',
      title: 'Exam - D',
      active: true,
      question_sources: [
        { exercise_id: 'node_21', question_id: 'x' },
        { exercise_id: 'node_21', question_id: 'y' },
        { exercise_id: 'node_21', question_id: 'z' },
      ],
      groups: [],
    },
  },
  examLearnerStatusMap: {
    exam_id_1: {
      learner_id_1: {
        exam_id: 'exam_id_1',
        learner_id: 'learner_id_1',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:14:52.831Z'),
        num_correct: 1,
        score: 0.3333333333333333,
      },
      learner_id_11: {
        exam_id: 'exam_id_1',
        learner_id: 'learner_id_11',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:04:26.540Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
    },
    exam_id_2: {
      learner_id_2: {
        exam_id: 'exam_id_2',
        learner_id: 'learner_id_2',
        status: 'started',
        last_activity: new Date('2019-01-24T23:00:08.771Z'),
        num_correct: 2,
        score: 1,
      },
      learner_id_5: {
        exam_id: 'exam_id_2',
        learner_id: 'learner_id_5',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:12:37.858Z'),
        num_correct: 2,
        score: 1,
      },
      learner_id_8: {
        exam_id: 'exam_id_2',
        learner_id: 'learner_id_8',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:11:49.782Z'),
        num_correct: 1,
        score: 0.5,
      },
    },
    exam_id_4: {
      learner_id_4: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_4',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:34:39.693Z'),
        num_correct: 0,
        score: 0,
      },
      learner_id_3: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_3',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:31:56.584Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_1: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_1',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:32:25.970Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_10: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_10',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:33:44.351Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_2: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_2',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:45:13.097Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_6: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_6',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:35:15.068Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_5: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_5',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:32:07.956Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_8: {
        exam_id: 'exam_id_4',
        learner_id: 'learner_id_8',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:34:10.329Z'),
        num_correct: 1,
        score: 0.3333333333333333,
      },
    },
    exam_id_3: {
      learner_id_10: {
        exam_id: 'exam_id_3',
        learner_id: 'learner_id_10',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:15:40.569Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_3: {
        exam_id: 'exam_id_3',
        learner_id: 'learner_id_3',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:12:54.385Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
      learner_id_4: {
        exam_id: 'exam_id_3',
        learner_id: 'learner_id_4',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:11:46.956Z'),
        num_correct: 2,
        score: 0.6666666666666666,
      },
    },
  },
  contentMap: {
    content_A: {
      node_id: 'node_1',
      content_id: 'content_A',
      title: 'aesop_fables',
      kind: 'document',
    },
    content_B: {
      node_id: 'node_2',
      content_id: 'content_B',
      title: 'arthur-conan-doyle_the-adventures-of-sherlock-holmes',
      kind: 'document',
    },
    content_C: {
      node_id: 'node_3',
      content_id: 'content_C',
      title: 'arthur-conan-doyle_the-hound-of-the-baskervilles',
      kind: 'document',
    },
    content_D: {
      node_id: 'node_4',
      content_id: 'content_D',
      title: 'Mata and I',
      kind: 'document',
    },
    content_E: {
      node_id: 'node_5',
      content_id: 'content_E',
      title: 'Expression Exchange',
      kind: 'html5',
    },
    content_F: {
      node_id: 'node_6',
      content_id: 'content_F',
      title: 'Make a Ten',
      kind: 'html5',
    },
    content_G: {
      node_id: 'node_7',
      content_id: 'content_G',
      title: "Ajouter des nombres jusqu'à 5",
      kind: 'exercise',
    },
    content_H: {
      node_id: 'node_8',
      content_id: 'content_H',
      title: "Soustraire des nombres jusqu'à 5",
      kind: 'exercise',
    },
    content_I: {
      node_id: 'node_9',
      content_id: 'content_I',
      title: " Les bases de l'addition ",
      kind: 'video',
    },
    content_J: {
      node_id: 'node_10',
      content_id: 'content_J',
      title: 'Addition de vecteurs dans le plan',
      kind: 'video',
    },
    content_K: {
      node_id: 'node_11',
      content_id: 'content_K',
      title: 'Look at the Clock and Tell the Time Practice',
      kind: 'exercise',
    },
    content_L: {
      node_id: 'node_12',
      content_id: 'content_L',
      title: 'Identifying Rectangles, Squares, Circles, and Triangles Practice',
      kind: 'exercise',
    },
    content_M: {
      node_id: 'node_13',
      content_id: 'content_M',
      title: 'Numbers to 120',
      kind: 'exercise',
    },
    content_N: {
      node_id: 'node_14',
      content_id: 'content_N',
      title: 'Equal sign',
      kind: 'exercise',
    },
    content_O: {
      node_id: 'node_15',
      content_id: 'content_O',
      title: 'Word problems with "more" and "fewer" 2',
      kind: 'exercise',
    },
    content_P: {
      node_id: 'node_16',
      content_id: 'content_P',
      title: 'Add 1s or 10s (no regrouping)',
      kind: 'exercise',
    },
    content_Q: {
      node_id: 'node_17',
      content_id: 'content_Q',
      title: 'Repeated addition: haircuts',
      kind: 'video',
    },
    content_R: {
      node_id: 'node_18',
      content_id: 'content_R',
      title: 'Repeated addition',
      kind: 'exercise',
    },
    content_S: {
      node_id: 'node_19',
      content_id: 'content_S',
      title: 'Adding and subtracting on number line word problems',
      kind: 'video',
    },
    content_T: {
      node_id: 'node_20',
      content_id: 'content_T',
      title: 'Add and subtract on the number line word problems',
      kind: 'exercise',
    },
    content_U: {
      node_id: 'node_21',
      content_id: 'content_U',
      title: 'Name angles',
      kind: 'exercise',
    },
    content_V: {
      node_id: 'node_22',
      content_id: 'content_V',
      title: 'Overview of Telling Time to Quarter and Hour',
      kind: 'video',
    },
    content_W: {
      node_id: 'node_23',
      content_id: 'content_W',
      title: 'Puzzle',
      kind: 'html5',
    },
    content_X: {
      node_id: 'node_24',
      content_id: 'content_X',
      title: 'Paneer ( indian cheese )',
      kind: 'video',
    },
    content_Y: {
      node_id: 'node_25',
      content_id: 'content_Y',
      title: 'Overview of Addition (Sums to 10)',
      kind: 'video',
    },
    content_Z: {
      node_id: 'node_26',
      content_id: 'content_Z',
      title: 'Adding Sentences (Sums to 10) Practice',
      kind: 'exercise',
    },
    content_AA: {
      node_id: 'node_27',
      content_id: 'content_AA',
      title: 'Arseny’s family',
      kind: 'video',
    },
    content_BB: {
      node_id: 'node_28',
      content_id: 'content_BB',
      title: 'the diatonic braid',
      kind: 'document',
    },
    content_CC: {
      node_id: 'node_29',
      content_id: 'content_CC',
      title: "'n Ernstige Ongeluk",
      kind: 'html5',
    },
    content_DD: {
      node_id: 'node_30',
      content_id: 'content_DD',
      title: "'n Baie Lang Man",
      kind: 'html5',
    },
    content_FF: {
      node_id: 'node_31',
      content_id: 'content_FF',
      title: "'n Boontjiesaad",
      kind: 'html5',
    },
    content_GG: {
      node_id: 'node_32',
      content_id: 'content_GG',
      title: "'n Koei is my Vriend",
      kind: 'html5',
    },
  },
  contentNodeMap: {
    node_1: {
      node_id: 'node_1',
      content_id: 'content_A',
      title: 'aesop_fables',
      kind: 'document',
    },
    node_2: {
      node_id: 'node_2',
      content_id: 'content_B',
      title: 'arthur-conan-doyle_the-adventures-of-sherlock-holmes',
      kind: 'document',
    },
    node_3: {
      node_id: 'node_3',
      content_id: 'content_C',
      title: 'arthur-conan-doyle_the-hound-of-the-baskervilles',
      kind: 'document',
    },
    node_4: {
      node_id: 'node_4',
      content_id: 'content_D',
      title: 'Mata and I',
      kind: 'document',
    },
    node_5: {
      node_id: 'node_5',
      content_id: 'content_E',
      title: 'Expression Exchange',
      kind: 'html5',
    },
    node_6: {
      node_id: 'node_6',
      content_id: 'content_F',
      title: 'Make a Ten',
      kind: 'html5',
    },
    node_7: {
      node_id: 'node_7',
      content_id: 'content_G',
      title: "Ajouter des nombres jusqu'à 5",
      kind: 'exercise',
    },
    node_8: {
      node_id: 'node_8',
      content_id: 'content_H',
      title: "Soustraire des nombres jusqu'à 5",
      kind: 'exercise',
    },
    node_9: {
      node_id: 'node_9',
      content_id: 'content_I',
      title: " Les bases de l'addition ",
      kind: 'video',
    },
    node_10: {
      node_id: 'node_10',
      content_id: 'content_J',
      title: 'Addition de vecteurs dans le plan',
      kind: 'video',
    },
    node_11: {
      node_id: 'node_11',
      content_id: 'content_K',
      title: 'Look at the Clock and Tell the Time Practice',
      kind: 'exercise',
    },
    node_12: {
      node_id: 'node_12',
      content_id: 'content_L',
      title: 'Identifying Rectangles, Squares, Circles, and Triangles Practice',
      kind: 'exercise',
    },
    node_13: {
      node_id: 'node_13',
      content_id: 'content_M',
      title: 'Numbers to 120',
      kind: 'exercise',
    },
    node_14: {
      node_id: 'node_14',
      content_id: 'content_N',
      title: 'Equal sign',
      kind: 'exercise',
    },
    node_15: {
      node_id: 'node_15',
      content_id: 'content_O',
      title: 'Word problems with "more" and "fewer" 2',
      kind: 'exercise',
    },
    node_16: {
      node_id: 'node_16',
      content_id: 'content_P',
      title: 'Add 1s or 10s (no regrouping)',
      kind: 'exercise',
    },
    node_17: {
      node_id: 'node_17',
      content_id: 'content_Q',
      title: 'Repeated addition: haircuts',
      kind: 'video',
    },
    node_18: {
      node_id: 'node_18',
      content_id: 'content_R',
      title: 'Repeated addition',
      kind: 'exercise',
    },
    node_19: {
      node_id: 'node_19',
      content_id: 'content_S',
      title: 'Adding and subtracting on number line word problems',
      kind: 'video',
    },
    node_20: {
      node_id: 'node_20',
      content_id: 'content_T',
      title: 'Add and subtract on the number line word problems',
      kind: 'exercise',
    },
    node_21: {
      node_id: 'node_21',
      content_id: 'content_U',
      title: 'Name angles',
      kind: 'exercise',
    },
    node_22: {
      node_id: 'node_22',
      content_id: 'content_V',
      title: 'Overview of Telling Time to Quarter and Hour',
      kind: 'video',
    },
    node_23: {
      node_id: 'node_23',
      content_id: 'content_W',
      title: 'Puzzle',
      kind: 'html5',
    },
    node_24: {
      node_id: 'node_24',
      content_id: 'content_X',
      title: 'Paneer ( indian cheese )',
      kind: 'video',
    },
    node_25: {
      node_id: 'node_25',
      content_id: 'content_Y',
      title: 'Overview of Addition (Sums to 10)',
      kind: 'video',
    },
    node_26: {
      node_id: 'node_26',
      content_id: 'content_Z',
      title: 'Adding Sentences (Sums to 10) Practice',
      kind: 'exercise',
    },
    node_27: {
      node_id: 'node_27',
      content_id: 'content_AA',
      title: 'Arseny’s family',
      kind: 'video',
    },
    node_28: {
      node_id: 'node_28',
      content_id: 'content_BB',
      title: 'the diatonic braid',
      kind: 'document',
    },
    node_29: {
      node_id: 'node_29',
      content_id: 'content_CC',
      title: "'n Ernstige Ongeluk",
      kind: 'html5',
    },
    node_30: {
      node_id: 'node_30',
      content_id: 'content_DD',
      title: "'n Baie Lang Man",
      kind: 'html5',
    },
    node_31: {
      node_id: 'node_31',
      content_id: 'content_FF',
      title: "'n Boontjiesaad",
      kind: 'html5',
    },
    node_32: {
      node_id: 'node_32',
      content_id: 'content_GG',
      title: "'n Koei is my Vriend",
      kind: 'html5',
    },
  },
  contentLearnerStatusMap: {
    content_Q: {
      learner_id_6: {
        learner_id: 'learner_id_6',
        content_id: 'content_Q',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:41:29.288Z'),
        time_spent: 500.34,
      },
      learner_id_5: {
        learner_id: 'learner_id_5',
        content_id: 'content_Q',
        status: 'started',
        last_activity: new Date('2019-01-24T22:34:36.130Z'),
        time_spent: 123.34,
      },
    },
    content_R: {
      learner_id_6: {
        learner_id: 'learner_id_6',
        content_id: 'content_R',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:43:15.790Z'),
        time_spent: 0.34,
      },
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_R',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:46:29.200Z'),
        time_spent: 123.34,
      },
    },
    content_F: {
      learner_id_6: {
        learner_id: 'learner_id_6',
        content_id: 'content_F',
        status: 'not_started',
        last_activity: new Date('2019-01-24T22:43:37.786Z'),
        time_spent: 4.34,
      },
      learner_id_5: {
        learner_id: 'learner_id_5',
        content_id: 'content_F',
        status: 'not_started',
        last_activity: new Date('2019-01-24T23:17:24.102Z'),
        time_spent: 12232323233.34,
      },
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_F',
        status: 'not_started',
        last_activity: new Date('2019-01-24T22:46:41.441Z'),
        time_spent: 123.34,
      },
    },
    content_K: {
      learner_id_6: {
        learner_id: 'learner_id_6',
        content_id: 'content_K',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:47:10.710Z'),
        time_spent: 2323.34,
      },
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_K',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:51:14.773Z'),
        time_spent: 123.34,
      },
    },
    content_S: {
      learner_id_5: {
        learner_id: 'learner_id_5',
        content_id: 'content_S',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:06:09.415Z'),
        time_spent: 123.34,
      },
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_S',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:06:29.634Z'),
        time_spent: 123.34,
      },
    },
    content_T: {
      learner_id_5: {
        learner_id: 'learner_id_5',
        content_id: 'content_T',
        status: 'started',
        last_activity: new Date('2019-01-24T23:12:07.371Z'),
        time_spent: 123.34,
      },
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_T',
        status: 'completed',
        last_activity: new Date('2019-01-24T23:12:29.257Z'),
        time_spent: 123.34,
      },
    },
    content_V: {
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_V',
        status: 'started',
        last_activity: new Date('2019-01-24T22:49:46.776Z'),
        time_spent: 123.34,
      },
    },
    content_L: {
      learner_id_3: {
        learner_id: 'learner_id_3',
        content_id: 'content_L',
        status: 'completed',
        last_activity: new Date('2019-01-24T22:56:56.586Z'),
        time_spent: 123.34,
      },
    },
  },
  lessonMap: {
    lesson_id_1: {
      id: 'lesson_id_1',
      title: 'The Program 1',
      active: true,
      node_ids: ['node_17', 'node_18', 'node_6'],
      groups: ['group_id_2'],
    },
    lesson_id_2: {
      id: 'lesson_id_2',
      title: 'The Program 2',
      active: true,
      node_ids: ['node_22', 'node_11'],
      groups: ['group_id_3'],
    },
    lesson_id_3: {
      id: 'lesson_id_3',
      title: 'SCHOOL 1',
      active: true,
      node_ids: ['node_19', 'node_20'],
      groups: [],
    },
    lesson_4: {
      id: 'lesson_4',
      title: 'test',
      active: false,
      node_ids: ['node_29', 'node_32', 'node_30', 'node_31'],
      groups: [],
    },
  },
};
