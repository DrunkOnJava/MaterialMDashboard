import React, { useState, useEffect } from 'react';
import { TitlebarByAnima } from '../Buttons/components/Titlebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  RotateCw,
  Download,
  Upload,
  Check,
  X,
  AlertTriangle,
  FileText,
  Clock,
  Loader2,
  Play,
  Pause,
  FileDown,
  CheckCircle,
  PlayCircle,
  Star,
  DownloadCloud,
} from 'lucide-react';

export const ProgressPage = (): JSX.Element => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [fileProgress, setFileProgress] = useState(0);
  const [fileIsUploading, setFileIsUploading] = useState(false);

  // Increment progress for the first progress bar
  useEffect(() => {
    if (isRunning && progress1 < 100) {
      const timer = setTimeout(() => {
        setProgress1(prev => Math.min(prev + 1, 100));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [progress1, isRunning]);

  // Update demo progress bars
  useEffect(() => {
    setProgress2(65);
    setProgress3(35);
  }, []);

  // File upload simulation
  useEffect(() => {
    if (fileIsUploading && fileProgress < 100) {
      const timer = setTimeout(() => {
        setFileProgress(prev => {
          const increment = Math.floor(Math.random() * 5) + 1; // Random increment between 1-5
          const newProgress = Math.min(prev + increment, 100);
          if (newProgress === 100) {
            setFileIsUploading(false);
          }
          return newProgress;
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [fileProgress, fileIsUploading]);

  // Restart the progress
  const handleRestart = () => {
    setProgress1(0);
    setIsRunning(true);
  };

  // Toggle progress running state
  const toggleRunning = () => {
    setIsRunning(prev => !prev);
  };

  // Start file upload simulation
  const startFileUpload = () => {
    setFileProgress(0);
    setFileIsUploading(true);
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <TitlebarByAnima title="Progress Indicators" />
      <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Progress Bars
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Progress Bars</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">Default</span>
                          <span className="text-sm font-medium text-blackblack-60">
                            {progress1}%
                          </span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
                          <div
                            className="bg-light-themeprimaryblue h-2.5 rounded-full"
                            style={{ width: `${progress1}%` }}
                          ></div>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" onClick={handleRestart}>
                            <RotateCw className="mr-1 h-3 w-3" /> Restart
                          </Button>
                          <Button size="sm" variant="outline" onClick={toggleRunning}>
                            {isRunning ? (
                              <>
                                <Pause className="mr-1 h-3 w-3" /> Pause
                              </>
                            ) : (
                              <>
                                <Play className="mr-1 h-3 w-3" /> Start
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">Success</span>
                          <span className="text-sm font-medium text-blackblack-60">
                            {progress2}%
                          </span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
                          <div
                            className="bg-actionsuccess h-2.5 rounded-full"
                            style={{ width: `${progress2}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">Warning</span>
                          <span className="text-sm font-medium text-blackblack-60">
                            {progress3}%
                          </span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
                          <div
                            className="bg-actionalert h-2.5 rounded-full"
                            style={{ width: `${progress3}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Styled Progress Bars</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">Large</span>
                          <span className="text-sm font-medium text-blackblack-60">75%</span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-4">
                          <div
                            className="bg-light-themeprimaryblue h-4 rounded-full"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">
                            With Gradient
                          </span>
                          <span className="text-sm font-medium text-blackblack-60">60%</span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full bg-gradient-to-r from-light-themeprimaryblue to-light-themesecondarypurple"
                            style={{ width: '60%' }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">
                            With Stripes
                          </span>
                          <span className="text-sm font-medium text-blackblack-60">45%</span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
                          <div
                            className="h-2.5 rounded-full bg-light-themesecondarypurple relative overflow-hidden"
                            style={{ width: '45%' }}
                          >
                            <div
                              className="absolute inset-0 opacity-25"
                              style={{
                                backgroundImage:
                                  'linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)',
                                backgroundSize: '1rem 1rem',
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-blackblack-60">With Label</span>
                          <span className="text-sm font-medium text-blackblack-60">80%</span>
                        </div>
                        <div className="w-full bg-surfaceslightgray-20 rounded-full h-6">
                          <div
                            className="bg-light-themeprimaryblue h-6 rounded-full flex items-center justify-center text-xs font-medium text-white"
                            style={{ width: '80%' }}
                          >
                            80%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Progress Bar Examples</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-[#111c2d1a] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-light-themeprimaryblue" />
                          <div>
                            <h4 className="font-medium">quarterly_report.pdf</h4>
                            <p className="text-xs text-blackblack-60">12.5 MB</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1 rounded text-blackblack-60 hover:bg-surfaceslightgray-10">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                        <div
                          className="bg-light-themeprimaryblue h-2 rounded-full"
                          style={{ width: `${fileProgress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-blackblack-60">
                          {fileProgress === 100
                            ? 'Download complete'
                            : fileIsUploading
                              ? `Downloading: ${fileProgress}%`
                              : 'Ready to download'}
                        </span>
                        <button
                          className="text-xs text-light-themeprimaryblue font-medium"
                          onClick={startFileUpload}
                          disabled={fileIsUploading}
                        >
                          {fileProgress === 100
                            ? 'View File'
                            : fileIsUploading
                              ? 'Downloading...'
                              : 'Start Download'}
                        </button>
                      </div>
                    </div>

                    <div className="border border-[#111c2d1a] rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-medium">Project Completion</h4>
                          <p className="text-xs text-blackblack-60">Web Application Design</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">85%</p>
                          <p className="text-xs text-blackblack-60">24 of 28 tasks</p>
                        </div>
                      </div>
                      <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
                        <div
                          className="bg-actionsuccess h-2.5 rounded-full"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-blackblack-60">Started: Apr 5, 2025</span>
                        <span className="text-xs text-blackblack-60">Due: Apr 20, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Spinners &amp; Loaders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Spinners</h3>

                    <div className="flex flex-wrap gap-8">
                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-5 w-5 text-light-themeprimaryblue">
                          <Loader2 className="h-5 w-5" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Extra Small</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-8 w-8 text-light-themeprimaryblue">
                          <Loader2 className="h-8 w-8" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Small</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-12 w-12 text-light-themeprimaryblue">
                          <Loader2 className="h-12 w-12" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Medium</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-16 w-16 text-light-themeprimaryblue">
                          <Loader2 className="h-16 w-16" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Large</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium mt-8">Colored Spinners</h3>

                    <div className="flex flex-wrap gap-8">
                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-8 w-8 text-light-themeprimaryblue">
                          <Loader2 className="h-8 w-8" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Primary</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-8 w-8 text-light-themesecondarypurple">
                          <Loader2 className="h-8 w-8" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Secondary</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-8 w-8 text-actionsuccess">
                          <Loader2 className="h-8 w-8" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Success</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-8 w-8 text-actionalert">
                          <Loader2 className="h-8 w-8" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Warning</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="animate-spin h-8 w-8 text-actionwarning">
                          <Loader2 className="h-8 w-8" />
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Error</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Loading States</h3>

                    <div className="flex flex-wrap gap-4">
                      <Button disabled className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading...
                      </Button>

                      <Button variant="outline" disabled className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing...
                      </Button>

                      <Button variant="ghost" disabled className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Please wait...
                      </Button>
                    </div>

                    <h3 className="text-lg font-medium mt-8">Custom Loading Indicators</h3>

                    <div className="flex flex-wrap gap-8">
                      <div className="flex flex-col items-center">
                        <div className="relative h-8 w-8">
                          <div className="absolute inset-0 rounded-full border-4 border-surfaceslightgray-20"></div>
                          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-light-themeprimaryblue animate-spin"></div>
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Border Spinner</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-light-themeprimaryblue rounded-full animate-bounce"></div>
                          <div
                            className="h-2 w-2 bg-light-themeprimaryblue rounded-full animate-bounce"
                            style={{ animationDelay: '0.1s' }}
                          ></div>
                          <div
                            className="h-2 w-2 bg-light-themeprimaryblue rounded-full animate-bounce"
                            style={{ animationDelay: '0.2s' }}
                          ></div>
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Bounce Dots</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex space-x-1">
                          <div className="w-2 h-8 bg-light-themeprimaryblue rounded animate-pulse"></div>
                          <div
                            className="w-2 h-8 bg-light-themeprimaryblue rounded animate-pulse"
                            style={{ animationDelay: '0.2s' }}
                          ></div>
                          <div
                            className="w-2 h-8 bg-light-themeprimaryblue rounded animate-pulse"
                            style={{ animationDelay: '0.4s' }}
                          ></div>
                          <div
                            className="w-2 h-8 bg-light-themeprimaryblue rounded animate-pulse"
                            style={{ animationDelay: '0.6s' }}
                          ></div>
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Audio Bars</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="relative h-10 w-10">
                          <div className="absolute inset-0 h-full w-full rounded-full border-2 border-light-themeprimaryblue opacity-75 animate-ping"></div>
                          <div className="relative rounded-full h-10 w-10 bg-light-themeprimaryblue flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <span className="text-xs text-blackblack-60 mt-2">Pulse Effect</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Usage Examples</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-[#111c2d1a] rounded-lg p-6 flex flex-col items-center justify-center">
                      <Loader2 className="h-12 w-12 text-light-themeprimaryblue animate-spin mb-4" />
                      <p className="text-blackblack-60 text-center">Loading your content...</p>
                      <p className="text-blackblack-60 text-sm text-center mt-1">
                        This may take a few moments
                      </p>
                    </div>

                    <div className="border border-[#111c2d1a] rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <DownloadCloud className="h-5 w-5 text-light-themeprimaryblue mr-2" />
                        <h4 className="font-medium">Downloading File</h4>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm">project_files.zip</p>
                          <p className="text-xs text-blackblack-60">45.8 MB / 128.5 MB</p>
                        </div>
                        <p className="text-sm font-medium">36%</p>
                      </div>
                      <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                        <div
                          className="bg-light-themeprimaryblue h-2 rounded-full"
                          style={{ width: '36%' }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="text-xs text-blackblack-60">~2 minutes remaining</p>
                        <button className="text-xs text-actionwarning font-medium">Cancel</button>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#111c2d1a]">
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-blackblack-60">Download speed: 1.2 MB/s</p>
                          <button className="text-xs text-light-themeprimaryblue font-medium">
                            Pause
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-[#111c2d1a] rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Task Progress</h4>
                        <p className="text-sm font-medium">3/5 completed</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-actionsuccess-light flex items-center justify-center mr-3">
                            <CheckCircle className="h-3 w-3 text-actionsuccess" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">Project setup</p>
                            <div className="w-full bg-actionsuccess-light rounded-full h-1.5">
                              <div
                                className="bg-actionsuccess h-1.5 rounded-full"
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-actionsuccess-light flex items-center justify-center mr-3">
                            <CheckCircle className="h-3 w-3 text-actionsuccess" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">UI design</p>
                            <div className="w-full bg-actionsuccess-light rounded-full h-1.5">
                              <div
                                className="bg-actionsuccess h-1.5 rounded-full"
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-actionsuccess-light flex items-center justify-center mr-3">
                            <CheckCircle className="h-3 w-3 text-actionsuccess" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">Frontend development</p>
                            <div className="w-full bg-actionsuccess-light rounded-full h-1.5">
                              <div
                                className="bg-actionsuccess h-1.5 rounded-full"
                                style={{ width: '100%' }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-light-themeprimarylight-blue flex items-center justify-center mr-3">
                            <PlayCircle className="h-3 w-3 text-light-themeprimaryblue" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">Backend integration</p>
                            <div className="w-full bg-surfaceslightgray-20 rounded-full h-1.5">
                              <div
                                className="bg-light-themeprimaryblue h-1.5 rounded-full"
                                style={{ width: '60%' }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 rounded-full bg-surfaceslightgray-20 flex items-center justify-center mr-3">
                            <Clock className="h-3 w-3 text-blackblack-60" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">Testing & deployment</p>
                            <div className="w-full bg-surfaceslightgray-20 rounded-full h-1.5">
                              <div
                                className="bg-blackblack-60 h-1.5 rounded-full"
                                style={{ width: '0%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Rating Progress</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-[#111c2d1a] rounded-lg p-6">
                      <h4 className="font-medium mb-4">Product Rating</h4>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-sm text-blackblack-60 w-16">5 stars</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-surfaceslightgray-20 rounded-sm h-2">
                              <div
                                className="bg-actionalert h-2 rounded-sm"
                                style={{ width: '75%' }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm text-blackblack-60 w-10 text-right">75%</span>
                        </div>

                        <div className="flex items-center">
                          <span className="text-sm text-blackblack-60 w-16">4 stars</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-surfaceslightgray-20 rounded-sm h-2">
                              <div
                                className="bg-actionalert h-2 rounded-sm"
                                style={{ width: '18%' }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm text-blackblack-60 w-10 text-right">18%</span>
                        </div>

                        <div className="flex items-center">
                          <span className="text-sm text-blackblack-60 w-16">3 stars</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-surfaceslightgray-20 rounded-sm h-2">
                              <div
                                className="bg-actionalert h-2 rounded-sm"
                                style={{ width: '5%' }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm text-blackblack-60 w-10 text-right">5%</span>
                        </div>

                        <div className="flex items-center">
                          <span className="text-sm text-blackblack-60 w-16">2 stars</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-surfaceslightgray-20 rounded-sm h-2">
                              <div
                                className="bg-actionalert h-2 rounded-sm"
                                style={{ width: '2%' }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm text-blackblack-60 w-10 text-right">2%</span>
                        </div>

                        <div className="flex items-center">
                          <span className="text-sm text-blackblack-60 w-16">1 star</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-surfaceslightgray-20 rounded-sm h-2">
                              <div
                                className="bg-actionalert h-2 rounded-sm"
                                style={{ width: '0%' }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm text-blackblack-60 w-10 text-right">0%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-4 gap-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${star <= 4 ? 'text-actionalert fill-actionalert' : 'text-blackblack-20'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xl font-medium ml-2">4.0</span>
                        <span className="text-sm text-blackblack-60">based on 128 reviews</span>
                      </div>
                    </div>

                    <div className="border border-[#111c2d1a] rounded-lg p-6">
                      <h4 className="font-medium mb-4">Skill Progress</h4>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">HTML/CSS</span>
                            <span className="text-sm font-medium">95%</span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                            <div
                              className="bg-light-themeprimaryblue h-2 rounded-full"
                              style={{ width: '95%' }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">JavaScript</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                            <div
                              className="bg-light-themeprimaryblue h-2 rounded-full"
                              style={{ width: '85%' }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">React</span>
                            <span className="text-sm font-medium">80%</span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                            <div
                              className="bg-light-themeprimaryblue h-2 rounded-full"
                              style={{ width: '80%' }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Node.js</span>
                            <span className="text-sm font-medium">70%</span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                            <div
                              className="bg-light-themeprimaryblue h-2 rounded-full"
                              style={{ width: '70%' }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Python</span>
                            <span className="text-sm font-medium">65%</span>
                          </div>
                          <div className="w-full bg-surfaceslightgray-20 rounded-full h-2">
                            <div
                              className="bg-light-themeprimaryblue h-2 rounded-full"
                              style={{ width: '65%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-light-theme-shadow-medium">
              <CardHeader className="border-b border-[#111c2d1a] px-6 py-4">
                <CardTitle className="font-normal text-lg tracking-[-0.18px] leading-[25.2px] text-blackblack-100">
                  Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Progress Bar Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic progress bar
<div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
  <div
    className="bg-light-themeprimaryblue h-2.5 rounded-full"
    style={{ width: \`\${progress}%\` }}
  ></div>
</div>

// Progress bar with label
<div className="w-full bg-surfaceslightgray-20 rounded-full h-6">
  <div
    className="bg-light-themeprimaryblue h-6 rounded-full flex items-center justify-center text-xs font-medium text-white"
    style={{ width: "80%" }}
  >
    80%
  </div>
</div>

// Progress bar with gradient
<div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
  <div
    className="h-2.5 rounded-full bg-gradient-to-r from-light-themeprimaryblue to-light-themesecondarypurple"
    style={{ width: "60%" }}
  ></div>
</div>

// Progress bar with stripes
<div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
  <div
    className="h-2.5 rounded-full bg-light-themesecondarypurple relative overflow-hidden"
    style={{ width: "45%" }}
  >
    <div className="absolute inset-0 opacity-25" 
          style={{ 
            backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent)",
            backgroundSize: "1rem 1rem"
          }}></div>
  </div>
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Spinner &amp; Loader Code Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// Basic spinner
<div className="animate-spin h-8 w-8 text-light-themeprimaryblue">
  <Loader2 className="h-8 w-8" />
</div>

// Loading button
<Button disabled className="flex items-center gap-2">
  <Loader2 className="h-4 w-4 animate-spin" />
  Loading...
</Button>

// Border spinner
<div className="relative h-8 w-8">
  <div className="absolute inset-0 rounded-full border-4 border-surfaceslightgray-20"></div>
  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-light-themeprimaryblue animate-spin"></div>
</div>

// Bounce dots
<div className="flex space-x-1">
  <div className="h-2 w-2 bg-light-themeprimaryblue rounded-full animate-bounce"></div>
  <div className="h-2 w-2 bg-light-themeprimaryblue rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
  <div className="h-2 w-2 bg-light-themeprimaryblue rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
</div>

// Pulse effect
<div className="relative h-10 w-10">
  <div className="absolute inset-0 h-full w-full rounded-full border-2 border-light-themeprimaryblue opacity-75 animate-ping"></div>
  <div className="relative rounded-full h-10 w-10 bg-light-themeprimaryblue flex items-center justify-center">
    <Check className="h-5 w-5 text-white" />
  </div>
</div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-medium mt-6">Animated Progress Example</h3>
                  <pre className="p-4 bg-surfaceslightgray-20 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`// React state and effect for animating progress
import { useState, useEffect } from "react";

const ProgressExample = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // Increment progress
  useEffect(() => {
    if (isRunning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [progress, isRunning]);
  
  // Restart the progress
  const handleRestart = () => {
    setProgress(0);
    setIsRunning(true);
  };
  
  // Toggle progress running state
  const toggleRunning = () => {
    setIsRunning(prev => !prev);
  };
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-blackblack-60">Progress</span>
        <span className="text-sm font-medium text-blackblack-60">{progress}%</span>
      </div>
      <div className="w-full bg-surfaceslightgray-20 rounded-full h-2.5">
        <div
          className="bg-light-themeprimaryblue h-2.5 rounded-full"
          style={{ width: \`\${progress}%\` }}
        ></div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button size="sm" variant="outline" onClick={handleRestart}>
          <RotateCw className="mr-1 h-3 w-3" /> Restart
        </Button>
        <Button size="sm" variant="outline" onClick={toggleRunning}>
          {isRunning ? (
            <><Pause className="mr-1 h-3 w-3" /> Pause</>
          ) : (
            <><Play className="mr-1 h-3 w-3" /> Start</>
          )}
        </Button>
      </div>
    </div>
  );
};`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
      </main>
    </div>
  );
};
