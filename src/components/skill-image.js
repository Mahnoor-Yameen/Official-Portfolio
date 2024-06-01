import * as adobeXd from './../svgs/Skill/adobe-xd.svg';
import adobeaudition from './../svgs/Skill/adobeaudition.svg';
import afterEffects from './../svgs/Skill/after-effects.svg';
import angular from './../svgs/Skill/angular.svg';
import aws from './../svgs/Skill/aws.svg';
import azure from './../svgs/Skill/azure.svg';
import blender from './../svgs/Skill/blender.svg';
import bootstrap from './../svgs/Skill/bootstrap.svg';
import bulma from './../svgs/Skill/bulma.svg';
import c from './../svgs/Skill/c.svg';
import canva from './../svgs/Skill/canva.svg';
import capacitorjs from './../svgs/Skill/capacitorjs.svg';
import coffeescript from './../svgs/Skill/coffeescript.svg';
import cplusplus from './../svgs/Skill/cplusplus.svg';
import csharp from './../svgs/Skill/csharp.svg';
import css from './../svgs/Skill/css.svg';
import dart from './../svgs/Skill/dart.svg';
import deno from './../svgs/Skill/deno.svg';
import django from './../svgs/Skill/django.svg';
import docker from './../svgs/Skill/docker.svg';
import fastify from './../svgs/Skill/fastify.svg';
import figma from './../svgs/Skill/figma.svg';
import firebase from './../svgs/Skill/firebase.svg';
import flutter from './../svgs/Skill/flutter.svg';
import gcp from './../svgs/Skill/gcp.svg';
import gimp from './../svgs/Skill/gimp.svg';
import git from './../svgs/Skill/git.svg';
import go from './../svgs/Skill/go.svg';
import graphql from './../svgs/Skill/graphql.svg';
import haxe from './../svgs/Skill/haxe.svg';
import html from './../svgs/Skill/html.svg';
import illustrator from './../svgs/Skill/illustrator.svg';
import ionic from './../svgs/Skill/ionic.svg';
import java from './../svgs/Skill/java.svg';
import javascript from './../svgs/Skill/javascript.svg';
import julia from './../svgs/Skill/julia.svg';
import kotlin from './../svgs/Skill/kotlin.svg';
import lightroom from './../svgs/Skill/lightroom.svg';
import markdown from './../svgs/Skill/markdown.svg';
import materialui from './../svgs/Skill/materialui.svg';
import matlab from './../svgs/Skill/matlab.svg';
import memsql from './../svgs/Skill/memsql.svg';
import microsoftoffice from './../svgs/Skill/microsoftoffice.svg';
import mongoDB from './../svgs/Skill/mongoDB.svg';
import mysql from './../svgs/Skill/mysql.svg';
import nextJS from './../svgs/Skill/nextJS.svg';
import nginx from './../svgs/Skill/nginx.svg';
import numpy from './../svgs/Skill/numpy.svg';
import nuxtJS from './../svgs/Skill/nuxtJS.svg';
import opencv from './../svgs/Skill/opencv.svg';
import photoshop from './../svgs/Skill/photoshop.svg';
import php from './../svgs/Skill/php.svg';
import picsart from './../svgs/Skill/picsart.svg';
import postgresql from './../svgs/Skill/postgresql.svg';
import premierepro from './../svgs/Skill/premierepro.svg';
import python from './../svgs/Skill/python.svg';
import pytorch from './../svgs/Skill/pytorch.svg';
import react from './../svgs/Skill/react.svg';
import ruby from './../svgs/Skill/ruby.svg';
import selenium from './../svgs/Skill/selenium.svg';
import sketch from './../svgs/Skill/sketch.svg';
import strapi from './../svgs/Skill/strapi.svg';
import svelte from './../svgs/Skill/svelte.svg';
import swift from './../svgs/Skill/swift.svg';
import tailwind from './../svgs/Skill/tailwind.svg';
import tensorflow from './../svgs/Skill/tensorflow.svg';
import typescript from './../svgs/Skill/typescript.svg';
import unity from './../svgs/Skill/unity.svg';
import vitejs from './../svgs/Skill/vitejs.svg';
import vue from './../svgs/Skill/vue.svg';
import vuetifyjs from './../svgs/Skill/vuetifyjs.svg';
import webix from './../svgs/Skill/webix.svg';
import wolframalpha from './../svgs/Skill/wolframalpha.svg';
import wordpress from './../svgs/Skill/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}
