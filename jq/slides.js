 $(document).ready(function(){
             $("#SecondMenu").hide();
             $("#ThirdMenu").hide();
             $("#FourthMenu").hide();
             $("#fifthCont").hide();
             $(".SixthMenu").hide();

             $("#Home").click(function(){
               $("#ThirdMenu").slideUp(1000,function(){
                   $("#SecondMenu").slideUp(1000,function(){
                       $("#FourthMenu").slideUp(1000,function(){
                        $("#fifthCont").slideUp(1000,function(){
                            $(".SixthMenu").slideUp(1000,function(){
                                $("#FirstMenu").show();
                            });
                        });
                      });
                   });                    
                });
            });

            $("#AboutUs").click(function(){
               $("#FirstMenu").slideUp(1000,function(){
                   $("#ThirdMenu").slideUp(1000,function(){
                       $("#FourthMenu").slideUp(1000,function(){
                        $("#fifthCont").slideUp(1000,function(){
                            $(".SixthMenu").slideUp(1000,function(){
                                $("#SecondMenu").show();
                            });
                        });
                      });
                   });                    
                });
            });

            $("#Work").click(function(){
               $("#FirstMenu").slideUp(1000,function(){
                   $("#SecondMenu").slideUp(1000,function(){
                       $("#FourthMenu").slideUp(1000,function(){
                        $("#fifthCont").slideUp(1000,function(){
                            $(".SixthMenu").slideUp(1000,function(){
                                $("#ThirdMenu").show();
                            });
                        });
                      });
                   });                    
                });
            });

            $("#Team").click(function(){
               $("#FirstMenu").slideUp(1000,function(){
                   $("#SecondMenu").slideUp(1000,function(){
                       $("#ThirdMenu").slideUp(1000,function(){
                        $("#fifthCont").slideUp(1000,function(){
                            $(".SixthMenu").slideUp(1000,function(){
                                $("#FourthMenu").show();
                            });
                        });
                      });
                   });                    
                });
            });

            $("#News").click(function(){
               $("#FirstMenu").slideUp(1000,function(){
                   $("#SecondMenu").slideUp(1000,function(){
                       $("#FourthMenu").slideUp(1000,function(){
                        $("#ThirdMenu").slideUp(1000,function(){
                            $(".SixthMenu").slideUp(1000,function(){
                                $("#fifthCont").show();
                            });
                        });
                      });
                   });                    
                });
            });

            $("#Contact").click(function(){
               $("#FirstMenu").slideUp(1000,function(){
                   $("#SecondMenu").slideUp(1000,function(){
                       $("#FourthMenu").slideUp(1000,function(){
                        $("#fifthCont").slideUp(1000,function(){
                            $("#ThirdMenu").slideUp(1000,function(){
                                $(".SixthMenu").show();
                            });
                        });
                      });
                   });                    
                });
            });
            
        });