const updateStudentGradeByCity = (studentsList, city, newGrades) => studentsList
  .filter((objItem) => objItem.location === city)
  .map((list) => {
    const aGrade = newGrades.find(
      (item) => item.studentId === list.id,
    );

    const modifiedList = { ...list };

    modifiedList.grade = aGrade ? aGrade.grade : 'N/A';
    return modifiedList;
  });

export default updateStudentGradeByCity;
