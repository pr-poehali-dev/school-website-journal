import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Школа №47
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Добро пожаловать в будущее образования! Современная школа с
                инновационным подходом к обучению.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Icon name="Trophy" size={16} className="mr-2" />
                  Лучшая школа 2024
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Icon name="Users" size={16} className="mr-2" />
                  1200+ учеников
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Icon name="GraduationCap" size={16} className="mr-2" />
                  85 учителей
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" size={24} className="text-blue-600" />
                    Современное образование
                  </CardTitle>
                  <CardDescription>
                    Интерактивные уроки, цифровые технологии и индивидуальный
                    подход к каждому ученику.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon
                      name="Monitor"
                      size={24}
                      className="text-purple-600"
                    />
                    Электронный журнал
                  </CardTitle>
                  <CardDescription>
                    Оценки, расписание и домашние задания доступны онлайн 24/7
                    для учеников и родителей.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Star" size={24} className="text-green-600" />
                    Достижения
                  </CardTitle>
                  <CardDescription>
                    Наши ученики — победители олимпиад и конкурсов
                    всероссийского уровня.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Последние новости</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-primary mb-2">
                    Научная конференция
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    15 марта состоится школьная научная конференция
                  </p>
                </div>
                <div className="bg-white/50 rounded-xl p-4 backdrop-blur-sm">
                  <h3 className="font-semibold text-primary mb-2">
                    Весенние каникулы
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Каникулы с 20 по 28 марта
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "news":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Новости школы</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Победа в региональной олимпиаде",
                  date: "2 марта 2024",
                  content:
                    "Ученики 10А класса заняли призовые места в олимпиаде по математике",
                  icon: "Trophy",
                },
                {
                  title: "Новое оборудование в лаборатории",
                  date: "28 февраля 2024",
                  content:
                    "В кабинете химии установлено современное интерактивное оборудование",
                  icon: "Microscope",
                },
                {
                  title: "День открытых дверей",
                  date: "25 февраля 2024",
                  content:
                    "Приглашаем будущих первоклассников и их родителей на день открытых дверей",
                  icon: "Door",
                },
                {
                  title: "Спортивные соревнования",
                  date: "20 февраля 2024",
                  content:
                    "Школьная команда по баскетболу вышла в финал городского чемпионата",
                  icon: "Activity",
                },
              ].map((news, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon
                        name={news.icon}
                        size={20}
                        className="text-primary"
                      />
                      {news.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {news.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{news.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "schedule":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">
              Расписание занятий
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    Понедельник
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        time: "8:00-8:45",
                        subject: "Математика",
                        teacher: "Иванова А.П.",
                        room: "205",
                      },
                      {
                        time: "8:55-9:40",
                        subject: "Русский язык",
                        teacher: "Петрова С.И.",
                        room: "107",
                      },
                      {
                        time: "9:50-10:35",
                        subject: "Физика",
                        teacher: "Сидоров М.В.",
                        room: "301",
                      },
                      {
                        time: "10:45-11:30",
                        subject: "История",
                        teacher: "Козлов Д.А.",
                        room: "115",
                      },
                      {
                        time: "11:40-12:25",
                        subject: "Химия",
                        teacher: "Морозова Л.К.",
                        room: "203",
                      },
                      {
                        time: "12:35-13:20",
                        subject: "География",
                        teacher: "Волков П.Р.",
                        room: "110",
                      },
                    ].map((lesson, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">
                            {lesson.time}
                          </Badge>
                          <div>
                            <p className="font-medium">{lesson.subject}</p>
                            <p className="text-sm text-muted-foreground">
                              {lesson.teacher}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {lesson.room}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} className="text-primary" />
                    Время звонков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { lesson: "1 урок", time: "8:00 - 8:45" },
                      { lesson: "2 урок", time: "8:55 - 9:40" },
                      { lesson: "3 урок", time: "9:50 - 10:35" },
                      { lesson: "4 урок", time: "10:45 - 11:30" },
                      { lesson: "5 урок", time: "11:40 - 12:25" },
                      { lesson: "6 урок", time: "12:35 - 13:20" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg"
                      >
                        <span className="font-medium">{item.lesson}</span>
                        <span className="text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "journal":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">
              Электронный журнал
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" size={20} className="text-primary" />
                    Оценки за неделю
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { subject: "Математика", grades: [5, 4, 5, 4], avg: 4.5 },
                      {
                        subject: "Русский язык",
                        grades: [4, 5, 4, 5],
                        avg: 4.5,
                      },
                      { subject: "Физика", grades: [5, 5, 4], avg: 4.7 },
                      { subject: "История", grades: [4, 4, 5], avg: 4.3 },
                      { subject: "Химия", grades: [5, 4, 5], avg: 4.7 },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{item.subject}</span>
                          <div className="flex gap-1">
                            {item.grades.map((grade, gradeIndex) => (
                              <Badge
                                key={gradeIndex}
                                variant={grade >= 4 ? "default" : "destructive"}
                                className="text-xs"
                              >
                                {grade}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium">
                            Ср: {item.avg}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600"
                    />
                    Посещаемость
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: "4 марта", status: "present", lessons: 6 },
                      { date: "3 марта", status: "present", lessons: 5 },
                      {
                        date: "2 марта",
                        status: "absent",
                        lessons: 6,
                        reason: "Болезнь",
                      },
                      { date: "1 марта", status: "present", lessons: 6 },
                      { date: "29 февраля", status: "present", lessons: 5 },
                    ].map((day, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            name={
                              day.status === "present"
                                ? "CheckCircle"
                                : "XCircle"
                            }
                            size={20}
                            className={
                              day.status === "present"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          />
                          <div>
                            <p className="font-medium">{day.date}</p>
                            {day.reason && (
                              <p className="text-sm text-muted-foreground">
                                {day.reason}
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {day.lessons} уроков
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Home" size={20} className="text-primary" />
                  Домашние задания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      subject: "Математика",
                      task: "Решить задачи №125-130",
                      due: "5 марта",
                      status: "pending",
                    },
                    {
                      subject: "Русский язык",
                      task: "Написать сочинение на тему 'Весна'",
                      due: "6 марта",
                      status: "pending",
                    },
                    {
                      subject: "Физика",
                      task: "Выучить формулы по теме 'Электричество'",
                      due: "7 марта",
                      status: "completed",
                    },
                    {
                      subject: "История",
                      task: "Прочитать главу 15, ответить на вопросы",
                      due: "8 марта",
                      status: "pending",
                    },
                  ].map((hw, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-4 bg-muted/50 rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <Icon
                          name={
                            hw.status === "completed" ? "CheckCircle" : "Clock"
                          }
                          size={20}
                          className={
                            hw.status === "completed"
                              ? "text-green-600"
                              : "text-orange-600"
                          }
                        />
                        <div>
                          <p className="font-medium">{hw.subject}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {hw.task}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            До: {hw.due}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          hw.status === "completed" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {hw.status === "completed" ? "Выполнено" : "В работе"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "teachers":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Наши учителя</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Иванова Анна Петровна",
                  subject: "Математика",
                  experience: "15 лет",
                  photo: "👩‍🏫",
                },
                {
                  name: "Петрова Светлана Ивановна",
                  subject: "Русский язык",
                  experience: "20 лет",
                  photo: "👩‍🏫",
                },
                {
                  name: "Сидоров Михаил Викторович",
                  subject: "Физика",
                  experience: "12 лет",
                  photo: "👨‍🏫",
                },
                {
                  name: "Козлов Дмитрий Андреевич",
                  subject: "История",
                  experience: "18 лет",
                  photo: "👨‍🏫",
                },
                {
                  name: "Морозова Людмила Константиновна",
                  subject: "Химия",
                  experience: "22 года",
                  photo: "👩‍🏫",
                },
                {
                  name: "Волков Павел Романович",
                  subject: "География",
                  experience: "10 лет",
                  photo: "👨‍🏫",
                },
              ].map((teacher, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{teacher.photo}</div>
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="mb-2">
                        {teacher.subject}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        Стаж: {teacher.experience}
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "login":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Вход в систему</h2>
            <div className="max-w-md mx-auto">
              <Tabs defaultValue="student" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="student"
                    className="flex items-center gap-2"
                  >
                    <Icon name="User" size={16} />
                    Ученики
                  </TabsTrigger>
                  <TabsTrigger
                    value="teacher"
                    className="flex items-center gap-2"
                  >
                    <Icon name="GraduationCap" size={16} />
                    Учителя
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="student" className="space-y-4">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-2">👨‍🎓</div>
                      <CardTitle>Вход для учеников</CardTitle>
                      <CardDescription>
                        Введите свои данные для доступа к электронному журналу
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-login">
                          Логин (номер дневника)
                        </Label>
                        <Input
                          id="student-login"
                          type="text"
                          placeholder="Например: 2024001"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="student-password">Пароль</Label>
                        <Input
                          id="student-password"
                          type="password"
                          placeholder="Введите пароль"
                          className="w-full"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <Icon name="LogIn" size={16} className="mr-2" />
                        Войти в журнал
                      </Button>
                      <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Забыли пароль? Обратитесь к классному руководителю
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            <strong>Демо-доступ:</strong>
                            <br />
                            Логин: demo2024
                            <br />
                            Пароль: student123
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="teacher" className="space-y-4">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-2">👩‍🏫</div>
                      <CardTitle>Вход для учителей</CardTitle>
                      <CardDescription>
                        Авторизуйтесь для доступа к системе управления журналом
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="teacher-login">
                          Логин (табельный номер)
                        </Label>
                        <Input
                          id="teacher-login"
                          type="text"
                          placeholder="Например: T001"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teacher-password">Пароль</Label>
                        <Input
                          id="teacher-password"
                          type="password"
                          placeholder="Введите пароль"
                          className="w-full"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <Icon name="LogIn" size={16} className="mr-2" />
                        Войти в систему
                      </Button>
                      <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Проблемы с входом? Обратитесь к администратору
                        </p>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            <strong>Демо-доступ:</strong>
                            <br />
                            Логин: teacher001
                            <br />
                            Пароль: teacher123
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Возможности системы:</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      Для учеников:
                    </h4>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Просмотр оценок</li>
                      <li>• Домашние задания</li>
                      <li>• Расписание уроков</li>
                      <li>• Посещаемость</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">
                      Для учителей:
                    </h4>
                    <ul className="text-xs text-purple-800 space-y-1">
                      <li>• Ведение журнала</li>
                      <li>• Выставление оценок</li>
                      <li>• Отметки посещаемости</li>
                      <li>• Задание домашних работ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="font-bold text-xl">Школа №47</span>
            </div>
            <div className="flex gap-2">
              {[
                { id: "home", label: "Главная", icon: "Home" },
                { id: "news", label: "Новости", icon: "Newspaper" },
                { id: "schedule", label: "Расписание", icon: "Calendar" },
                { id: "journal", label: "Журнал", icon: "BookOpen" },
                { id: "teachers", label: "Учителя", icon: "Users" },
                { id: "login", label: "Вход", icon: "LogIn" },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2"
                >
                  <Icon name={tab.icon} size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">{renderContent()}</main>

      <footer className="bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="GraduationCap" size={24} className="text-primary" />
            <span className="font-bold text-lg">Школа №47</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Адрес: ул. Школьная, 47, г. Город | Телефон: +7 (123) 456-78-90
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            © 2024 Школа №47. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
