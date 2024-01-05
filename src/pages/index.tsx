import React from 'react';

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Component() {
  return (
    <main key="1" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-xl p-4 mt-10 bg-white dark:bg-gray-800 border-2 border-gray-300">
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="text-2xl font-bold">Jira Ticket Generator</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">Powered by GenAI</CardDescription>
        </CardHeader>
        <CardContent className="border-t pt-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="prompt">
                Ticket Prompt
              </Label>
              <Textarea className="w-full h-20" id="prompt" placeholder="Enter your ticket prompt here" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="epic">
                Epic / Product Context
              </Label>
              <Input id="epic" placeholder="Enter epic / product context" />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
             Generate Ticket ✨
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="flex justify-center items-center mt-4">
        <div className="h-6 w-6 animate-bounce text-gray-500 dark:text-gray-400" />
      </div>
      <Card className="w-full max-w-xl p-4 mt-10 bg-white dark:bg-gray-800 border-2 border-purple-500">
        <CardHeader className="flex flex-col items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold">Generated Ticket</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="border-t pt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Ticket Summary</Label>
              <p className="text-gray-500 dark:text-gray-400">Generated ticket summary goes here</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Ticket Description</Label>
              <p className="text-gray-500 dark:text-gray-400">Generated ticket description goes here</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Epic / Product Context</Label>
              <p className="text-gray-500 dark:text-gray-400">Entered epic / product context goes here</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Link to Jira Ticket</Label>
              <div className="mt-2">
                <Link className="text-blue-500 hover:underline" href="#">
                  Click here to view the ticket in Jira
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default Component;
