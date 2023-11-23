<?php

namespace App\Controller;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        return $this->twig->render('Home/index.html.twig');
    }

    public function papa(): string
    {
        return $this->twig->render('Home/index-papa.html.twig');
    }
}
