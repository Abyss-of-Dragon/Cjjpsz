# Software Engineering Lab 6

> 10195101553 苏建锐，East China Normal University

### Assignment 2: Design Tests

- #### Input space partition

  1. Each choice coverage

  |  A   |  B   |  C   |
  | :--: | :--: | :--: |
  |  1   |  1   |  1   |
  |  2   |  2   |  2   |
  |  0   |  0   |  0   |
  |  -1  |  -1  |  -1  |

  2. Pair-wise coverage

|  A   |  B   |  C   |
| :--: | :--: | :--: |
|  1   |  1   |  1   |
|  1   |  2   |  2   |
|  1   |  0   |  0   |
|  1   |  -1  |  -1  |
|  2   |  1   |  2   |
|  2   |  2   |  0   |
|  2   |  0   |  -1  |
|  2   |  -1  |  1   |
|  0   |  1   |  0   |
|  0   |  2   |  -1  |
|  0   |  0   |  1   |
|  0   |  -1  |  2   |
|  -1  |  1   |  -1  |
|  -1  |  2   |  1   |
|  -1  |  0   |  2   |
|  -1  |  -1  |  0   |

- #### Graph coverage

  ![IMG_1190(20210528-183314)](D:\TIM\FileRece\MobileFile\IMG_1190(20210528-183314).PNG)

  The control flow diagram for this case is top-down without loops, the test cases for edge coverage, node coverage, and prime path coverage can be used in general.

  TR: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,23,24,25]

  1. Node coverage

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  1   |  0   |  1   |
     |  1   |  1   |  1   |
     |  2   |  2   |  3   |
     |  2   |  3   |  2   |
     |  3   |  6   |  3   |
     |  3   |  2   |  2   |
     |  6   |  3   |  3   |
     |  1   |  3   |  4   |
     |  2   |  3   |  4   |
     |  2   |  3   |  3   |

     

  2. edge coverage

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  1   |  0   |  1   |
     |  1   |  1   |  1   |
     |  2   |  2   |  3   |
     |  2   |  3   |  2   |
     |  3   |  6   |  3   |
     |  3   |  2   |  2   |
     |  6   |  3   |  3   |
     |  1   |  3   |  4   |
     |  2   |  3   |  4   |
     |  2   |  3   |  3   |

     

  3. prime path coverage
     There are totally 81 main Paths

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  1   |  0   |  1   |
     |  1   |  1   |  1   |
     |  2   |  2   |  3   |
     |  2   |  3   |  2   |
     |  3   |  6   |  3   |
     |  3   |  2   |  2   |
     |  6   |  3   |  3   |
     |  1   |  3   |  4   |
     |  2   |  3   |  4   |
     |  2   |  3   |  3   |

     

  4.  all-use coverage

     take triout = 4:

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  1   |  0   |  1   |
     |  3   |  6   |  3   |
     |  6   |  3   |  3   |
     |  1   |  3   |  4   |
     |  -1  |  0   |  1   |

     

- #### Logic coverage

  1. Predicate coverage

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  1   |  1   |  1   |
     |  2   |  3   |  6   |

     

  2. clause coverage

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  2   |  2   |  3   |
     |  2   |  3   |  2   |

     

  3. Correlated Active Clause Coverage

     |  A   |  B   |  C   |
     | :--: | :--: | :--: |
     |  0   |  1   |  1   |
     |  1   |  1   |  1   |
     |  1   |  0   |  1   |
     |  2   |  3   |  6   |
     |  2   |  3   |  4   |
     |  7   |  2   |  3   |
     |  1   |  3   |  4   |
     |  2   |  2   |  3   |
     |  2   |  3   |  3   |
     |  5   |  2   |  2   |
     |  3   |  2   |  2   |

     

- #### mutation testing

  - [ ] For TritypMutantOne:

    |  A   |  B   |  C   |
    | :--: | :--: | :--: |
    |  2   |  2   |  4   |

    Should be: 4    Actual result: 2

  - [ ] For TritypMutantTwo:

    |  A   |  B   |  C   |
    | :--: | :--: | :--: |
    |  2   |  2   |  4   |

    Should be: 4    Actual result: 2

