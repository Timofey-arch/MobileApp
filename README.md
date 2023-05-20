# MobileApp

## ПЛАН ПО МОНЕТИЗАЦИИ ПРИЛОЖЕНИЯ

В моем приложении я откажусь от такой вещи как премиальные функции, доступные лишь по подписке. Вместо этого
будет использована реклама небольшими и не слишком мешающими баннерами. 

Для публикации приложения будет использоваться инструмент ```EXPO CLI```. Он позволяет собрать релизную версию и уже ее выложить 
на такие площадки как ```Google Play```.

## РУКОВОДСТВО ПОЛЬЗОВАТЕЛЯ

Данное приложение было создано для любителей кулинарии. Оно отлично подойдет тем, кто не всегда знает, что хочет приготовить.
В приложении необходимо зарегистрироваться, чтобы иметь личный кабинет.
После входа в приложение перед вами открывается нижнее меню состоящее из 4х пунктов, при нажатии на каждый из них открывается соответствующий раздел:

- Главная страница
- Личный кабинет
- Каталог рецептов
- Домашняя страница

На главной странице располагается окно с рецептом дня. В нем вы можете выбрать любой другой случайный рецепт, нажав кнопку
```Другой рецепт```

В личном кабинете вы можете посмотреть свои данные и добавленные рецепты.

В каталоге рецептов вы можете ознакомиться с различными рецептами.

На домашней странице есть карта, на которой вы можете посмотреть ближайшие места для покупки продуктов.
## ИНСТРУКЦИЯ ПО СБОРКЕ
Для создания файла .apk вам необходимо выполнить следующую команду

#### Прежде всего откройте папку с проектом и перейдите в каталог android с помощью этой команды:
```cd android```

#### После этого вам нужно собрать .apk файл с помощью этой команды:
```gradlew assembleDebug```

#### И после построения вы увидите ```app-debug.apk``` файл в ```MobileApp/android/app/build/outputs/apk/debug```
